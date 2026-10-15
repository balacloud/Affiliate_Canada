import type { PillarId } from '@/types/editorial';

/**
 * Text status pill. The leading marker's shape (ring for "preparing",
 * square for "preview", pause bars for "on hold") carries meaning
 * alongside colour and the always-visible label.
 */
export function ReadinessBadge({
  tone,
  marker,
  children,
}: {
  tone: PillarId | 'hold';
  marker: 'ring' | 'square' | 'pause';
  children: React.ReactNode;
}) {
  const toneClass =
    tone === 'seasonal' || tone === 'hold' ? 'bg-rust-tint text-rust-dark' : 'bg-sage-tint text-sage-dark';
  return (
    <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${toneClass}`}>
      {marker === 'ring' ? (
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-current" />
      ) : marker === 'square' ? (
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-[2px] bg-current" />
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M8 5v14M16 5v14" />
        </svg>
      )}
      {children}
    </p>
  );
}
