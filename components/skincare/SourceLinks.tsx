import type { SourceRef } from '@/types/editorial';
import { formatDate } from '@/lib/format';
import { EvidenceLink } from '@/components/EvidenceLink';

/**
 * Inline evidence links placed beside the observation they support.
 * Uses only the record's own source IDs. An empty list renders nothing —
 * the observation text itself says what is unknown; no source is invented.
 */
export function SourceLinks({
  ids,
  sources,
  label = 'Source',
}: {
  ids: string[];
  sources: Record<string, SourceRef>;
  label?: string;
}) {
  const refs = Array.from(new Set(ids))
    .map((id) => sources[id])
    .filter((s): s is SourceRef => Boolean(s));
  if (refs.length === 0) return null;
  return (
    <span className="mt-1 block text-sm text-ink-muted">
      {label}
      {refs.length > 1 ? 's' : ''}:{' '}
      {refs.map((s, i) => (
        <span key={s.id}>
          {i > 0 ? '; ' : null}
          <EvidenceLink href={s.url} className="text-sage-dark">
            {s.label}
          </EvidenceLink>{' '}
          (checked {formatDate(s.accessed)})
        </span>
      ))}
    </span>
  );
}
