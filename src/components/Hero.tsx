import type { Product } from "../products";
import { StockMeter } from "./StockMeter";
import { StockStatus } from "./StockStatus";

/** The opening pitch, with a ticket for the batch that's open right now. */
export function Hero({ featured }: { featured: Product | undefined }) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">
            Small-batch hardware · designed, printed and built by one engineer
          </p>
          <h1>Gadgets built like car electronics. Made in tiny batches.</h1>
          <p className="lead">
            I write embedded software for the automotive industry by day. These are the tools I
            build at night. Every enclosure is printed in my workshop and every board is assembled
            and tested by hand, so each batch is small and numbered.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#products">
              See the products
            </a>
            <a className="btn btn--ghost" href="#batches">
              Why stock is limited
            </a>
          </div>
        </div>
        {featured && (
          <aside className="ticket" aria-label="Current batch">
            <div className="ticket__bar">
              <span>Batch ticket</span>
              <span>Rev A</span>
            </div>
            <div className="ticket__body">
              <div className="ticket__title">
                <span>{featured.name}</span>
                <StockStatus batch={featured.batch} />
              </div>
              <dl className="ticket__facts">
                <dt>Part no.</dt>
                <dd>{featured.partNumber}</dd>
                <dt>Price</dt>
                <dd>{featured.price}</dd>
              </dl>
              <StockMeter batch={featured.batch} />
              <p className="ticket__legend">Filled = still available. Dashed = already shipped.</p>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
