/** The top bar: the wallago mark and links to each section. */
export function SiteHeader() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true">
            W
          </span>
          <span className="brand__name">wallago labs</span>
        </a>
        <nav aria-label="Main" className="nav">
          <a href="#products">Products</a>
          <a href="#batches">Batches</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}
