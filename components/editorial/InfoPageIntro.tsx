import { Breadcrumbs } from './Breadcrumbs';

/** Shared introduction for the application-facing information pages. */
export function InfoPageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="border-b border-line bg-sand">
      <div className="container-page py-10 sm:py-16">
        <Breadcrumbs className="mb-6 text-ink-muted" items={[{ label: 'Home', href: '/' }, { label }]} />
        <p className="kicker mb-3 text-rust">{label}</p>
        <h1 className="heading-display max-w-[52rem] text-[36px] sm:text-[54px]">{title}</h1>
        <p className="mt-5 max-w-[43rem] text-[18px] text-ink-body sm:text-[20px]">{description}</p>
      </div>
    </section>
  );
}
