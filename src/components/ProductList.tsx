import { type Product, stockState } from "../products";
import { ProductCard } from "./ProductCard";

/** Every product, with a count of what can be ordered now. */
export function ProductList({ products }: { products: Product[] }) {
  const open = products.filter((p) => {
    const state = stockState(p.batch);
    return state === "in-stock" || state === "low";
  }).length;
  const soon = products.filter((p) => stockState(p.batch) === "coming-soon").length;

  return (
    <section className="section" id="products" aria-labelledby="products-heading">
      <div className="wrap">
        <div className="section__head">
          <h2 id="products-heading">Products</h2>
          <span className="mono muted">
            {open} available · {soon} coming soon
          </span>
        </div>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.partNumber} product={p} />
          ))}
          <div className="card card--next" aria-hidden="true">
            Next project
            <br />
            on the bench
          </div>
        </div>
      </div>
    </section>
  );
}
