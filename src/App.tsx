import { About } from "./components/About";
import { BatchSteps } from "./components/BatchSteps";
import { Hero } from "./components/Hero";
import { ProductList } from "./components/ProductList";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { products } from "./products";

/** The page: the pitch, the products, how batches work, and who makes them. */
export function App() {
  const featured = products.find((p) => p.batch.status === "open");
  return (
    <>
      <SiteHeader />
      <main>
        <Hero featured={featured} />
        <ProductList products={products} />
        <BatchSteps />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}
