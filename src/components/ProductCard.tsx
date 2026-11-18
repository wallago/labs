import { batchLabel, type Product, stockState } from "../products";
import { StockMeter } from "./StockMeter";
import { StockStatus } from "./StockStatus";

const actions = {
  "in-stock": "Order yours",
  low: "Order before it's gone",
  "sold-out": "Get told about the next batch",
  "coming-soon": "Get told when it opens",
} as const;

/** A product's tile, its availability and the one thing to do next. */
export function ProductCard({ product }: { product: Product }) {
  const state = stockState(product.batch);
  const headingId = `product-${product.partNumber}`;
  return (
    <article className="card" aria-labelledby={headingId}>
      <div className={`card__tile tile--${product.tone}`}>
        <span className="card__part">{product.partNumber}</span>
        <span className="card__photo">[{product.name} photo]</span>
      </div>
      <div className="card__body">
        <div className="card__title">
          <h3 id={headingId}>{product.name}</h3>
          <StockStatus batch={product.batch} />
        </div>
        <p className="card__tagline">{product.tagline}</p>
        <StockMeter batch={product.batch} />
        <div className="card__foot">
          <span className="card__price">{product.price}</span>
          <a className={state === "coming-soon" ? "btn btn--ghost" : "btn"} href="#contact">
            {actions[state]}
          </a>
        </div>
        <p className="card__note">
          {state === "coming-soon"
            ? `${batchLabel(product.batch)} is in the workshop now.`
            : "Max 2 per order, so more people get one."}
        </p>
      </div>
    </article>
  );
}
