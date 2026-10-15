'use client';

import { useId, useState } from 'react';
import type { SubscribeResult, SubscribeTopic } from '@/types/editorial';

type FormState =
  | { kind: 'idle' }
  | { kind: 'invalid'; message: string; field: 'email' | 'topic' | 'consent' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'failure' };

export interface EmailSignupProps {
  /**
   * A server action that performs the real subscription. When omitted, the
   * block renders an honest "not available yet" state and nothing is sent.
   */
  subscribe?: (formData: FormData) => Promise<SubscribeResult>;
  defaultTopic?: SubscribeTopic;
  heading?: string;
  intro?: string;
  tone?: 'dark' | 'light';
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Voluntary email signup with a topic preference. No popups, no pre-checked
 * consent, no fake success: success is shown only when the server action
 * reports ok, and copy tells the reader to confirm by email (double opt-in is
 * expected from the provider).
 */
export function EmailSignup({
  subscribe,
  defaultTopic,
  heading = 'Get new comparisons by email',
  intro = 'Choose a topic. Occasional updates when a shortlist is published — no daily deals.',
  tone = 'dark',
}: EmailSignupProps) {
  const uid = useId();
  const [state, setState] = useState<FormState>({ kind: 'idle' });
  const available = typeof subscribe === 'function';
  const disabled = !available || state.kind === 'submitting';
  const dark = tone === 'dark';

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!subscribe) return;
    const fd = new FormData(event.currentTarget);
    const email = String(fd.get('email') ?? '').trim();
    if (!fd.get('topic')) {
      setState({ kind: 'invalid', field: 'topic', message: 'Choose a topic so we know which updates to send.' });
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setState({
        kind: 'invalid',
        field: 'email',
        message: "That email address doesn't look complete. Check for an @ and a domain such as .ca.",
      });
      return;
    }
    if (fd.get('consent') !== 'yes') {
      setState({ kind: 'invalid', field: 'consent', message: 'Tick the consent box to subscribe.' });
      return;
    }
    setState({ kind: 'submitting' });
    try {
      const result = await subscribe(fd);
      if (result.ok) {
        setState({ kind: 'success' });
      } else if (result.reason === 'service-error') {
        setState({ kind: 'failure' });
      } else {
        const field = result.reason === 'invalid-email' ? 'email' : result.reason === 'missing-topic' ? 'topic' : 'consent';
        setState({ kind: 'invalid', field, message: 'Please check the highlighted field and try again.' });
      }
    } catch {
      setState({ kind: 'failure' });
    }
  }

  const status = (() => {
    if (!available) {
      return {
        mark: 'i',
        text: "Email updates aren't switched on yet. You can't subscribe today, and nothing you type here is sent or stored.",
        cls: dark ? 'bg-[#3A4640] text-ivory' : 'bg-sand text-ink',
      };
    }
    switch (state.kind) {
      case 'invalid':
        return { mark: '!', text: state.message, cls: 'bg-rust-dark text-ivory' };
      case 'submitting':
        return { mark: '…', text: 'Sending your request…', cls: dark ? 'bg-[#2C3A33] text-ivory' : 'bg-sand text-ink' };
      case 'success':
        return {
          mark: '✓',
          text: "Check your inbox to confirm. You're not subscribed until you click the link in that email.",
          cls: 'bg-sage text-ivory',
        };
      case 'failure':
        return {
          mark: '!',
          text: "We couldn't confirm your subscription request. Check your inbox before trying again.",
          cls: 'bg-rust-dark text-ivory',
        };
      default:
        return null;
    }
  })();

  const invalidField = state.kind === 'invalid' ? state.field : null;
  const ids = { heading: `${uid}-h`, email: `${uid}-email`, status: `${uid}-status`, consent: `${uid}-consent` };

  return (
    <section
      aria-labelledby={ids.heading}
      className={`flex flex-wrap gap-10 rounded-2xl p-6 sm:p-10 ${dark ? 'bg-ink text-[#F4F0E6]' : 'border border-line bg-paper text-ink'}`}
    >
      <div className="flex flex-[1_1_18rem] flex-col gap-3">
        <h2 id={ids.heading} className={`heading-display text-[28px] sm:text-[30px] ${dark ? 'text-ivory' : ''}`}>
          {heading}
        </h2>
        <p className={dark ? 'text-[#D8D2C4]' : 'text-ink-body'}>{intro}</p>
      </div>
      <form onSubmit={onSubmit} noValidate className="flex flex-[1_1_24rem] flex-col gap-4" aria-describedby={status ? ids.status : undefined}>
        <fieldset disabled={disabled} className="m-0 flex flex-wrap gap-x-5 gap-y-1 border-0 p-0" aria-invalid={invalidField === 'topic' || undefined}>
          <legend className="mb-2 p-0 text-[15px] font-semibold">Topic</legend>
          {(
            [
              ['seasonal', 'Seasonal favourites'],
              ['care', 'Personal care & household'],
              ['both', 'Both'],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="flex min-h-[44px] items-center gap-2">
              <input type="radio" name="topic" value={value} defaultChecked={defaultTopic === value} className="h-4 w-4" />
              {label}
            </label>
          ))}
        </fieldset>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex flex-[1_1_15rem] flex-col gap-1.5">
            <label htmlFor={ids.email} className="text-[15px] font-semibold">
              Email address
            </label>
            <input
              id={ids.email}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.ca"
              disabled={disabled}
              aria-invalid={invalidField === 'email' || undefined}
              className={`min-h-[48px] rounded-[10px] border-2 bg-ivory px-3.5 text-ink disabled:opacity-70 ${
                invalidField === 'email' ? 'border-rust-light' : 'border-[#6B736E]'
              }`}
            />
          </div>
          <button
            type="submit"
            disabled={disabled}
            className={`btn border-0 ${
              disabled ? 'cursor-not-allowed bg-[#6B736E] text-[#F4F0E6]' : dark ? 'bg-rust-light text-ink hover:bg-[#F0C6A7]' : 'bg-sage text-white hover:bg-sage-dark'
            }`}
          >
            {!available ? 'Not available yet' : state.kind === 'submitting' ? 'Subscribing…' : state.kind === 'failure' ? 'Try again' : 'Subscribe'}
          </button>
        </div>
        <label htmlFor={ids.consent} className={`flex items-start gap-2.5 text-[15px] ${dark ? 'text-[#D8D2C4]' : 'text-ink-body'}`}>
          <input
            id={ids.consent}
            type="checkbox"
            name="consent"
            value="yes"
            disabled={disabled}
            aria-invalid={invalidField === 'consent' || undefined}
            className="mt-1.5 h-4 w-4 shrink-0"
          />
          I agree to receive SmartShopCA emails about the topic I chose. I can unsubscribe at any time.
        </label>
        <div id={ids.status} role="status" aria-live="polite">
          {status ? (
            <p className={`flex items-start gap-2.5 rounded-[10px] px-3.5 py-3 text-[15px] ${status.cls}`}>
              <span aria-hidden="true" className="font-bold">
                {status.mark}
              </span>
              {status.text}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}

export default EmailSignup;
