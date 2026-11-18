import { type Batch, batchLabel } from "../products";

/**
 * One cell per unit of the batch: filled cells are still available, dashed
 * ones have shipped. A scheduled batch shows every cell as reserved-to-come.
 */
export function StockMeter({ batch }: { batch: Batch }) {
  const left = batch.status === "open" ? Math.min(Math.max(batch.left, 0), batch.size) : 0;
  const summary =
    batch.status === "open"
      ? left === 0
        ? `Sold out, all ${batch.size} units shipped`
        : `${left} of ${batch.size} left`
      : `${batch.size} units, opens ${batch.opens}`;

  return (
    <div className="meter">
      <div className="meter__head">
        <span>{batchLabel(batch)}</span>
        <strong>{summary}</strong>
      </div>
      <div className="meter__cells" role="img" aria-label={summary}>
        {Array.from({ length: batch.size }, (_, i) => {
          const kind = batch.status === "scheduled" ? "planned" : i < left ? "left" : "sold";
          // The cells are interchangeable, so their position is their identity.
          // biome-ignore lint/suspicious/noArrayIndexKey: see above
          return <span key={i} className={`meter__cell meter__cell--${kind}`} />;
        })}
      </div>
    </div>
  );
}
