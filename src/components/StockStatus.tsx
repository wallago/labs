import { type Batch, stockState } from "../products";

const labels = {
  "in-stock": () => "In stock",
  low: (left: number) => `Only ${left} left`,
  "sold-out": () => "Sold out",
  "coming-soon": () => "Coming soon",
} as const;

/** A small badge with the product's availability. */
export function StockStatus({ batch }: { batch: Batch }) {
  const state = stockState(batch);
  const left = batch.status === "open" ? batch.left : 0;
  return <span className={`badge badge--${state}`}>{labels[state](left)}</span>;
}
