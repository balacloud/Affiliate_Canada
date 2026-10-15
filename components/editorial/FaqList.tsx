import type { FaqItem } from '@/types/editorial';

/** Keyboard-usable disclosure list (native <details>), works without JavaScript. */
export function FaqList({ id, title, items }: { id: string; title: string; items: FaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby={id} className="flex flex-col gap-3">
      <h2 id={id} className="heading-display mb-2 text-[30px]">
        {title}
      </h2>
      {items.map((f) => (
        <details key={f.question} className="group rounded-xl border border-line bg-paper px-5">
          <summary className="flex min-h-[56px] list-none items-center justify-between gap-4 font-semibold">
            {f.question}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="shrink-0 transition-transform group-open:rotate-180"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <p className="mb-4 text-ink-body">{f.answer}</p>
        </details>
      ))}
    </section>
  );
}
