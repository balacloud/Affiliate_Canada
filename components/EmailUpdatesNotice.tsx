/**
 * Compact, truthful placeholder for email updates while no subscription
 * backend exists. It contains no form, so nothing can be typed, sent or
 * stored. When a real subscribe server action exists, render
 * <EmailSignup subscribe={…} /> instead (see components/EmailSignup.tsx).
 */
export function EmailUpdatesNotice({ className = '' }: { className?: string }) {
  return (
    <aside
      aria-labelledby="email-updates-h"
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-dashed border-ink-muted px-5 py-4 ${className}`}
    >
      <h2 id="email-updates-h" className="text-base font-bold">
        Email updates: coming later
      </h2>
      <p className="text-[15px] text-ink-body">
        There&rsquo;s no sign-up yet, so we don&rsquo;t collect any email addresses.
      </p>
    </aside>
  );
}

export default EmailUpdatesNotice;
