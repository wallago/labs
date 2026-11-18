const steps = [
  ["Source", "Parts are ordered for one batch only, usually 10 to 30 units."],
  ["Print & build", "Enclosures are printed in-house, boards assembled and flashed by hand."],
  ["Test", "Every unit runs on a test bench before it gets its serial number."],
  ["Ship", "Each one ships with its batch and unit number, like 01-007."],
] as const;

/** Why stock is limited, as the four steps every batch goes through. */
export function BatchSteps() {
  return (
    <section className="section section--dark" id="batches" aria-labelledby="batches-heading">
      <div className="wrap">
        <h2 id="batches-heading">Why stock is limited</h2>
        <p className="lead">
          I fund every batch myself. Components are ordered in small quantities, enclosures are
          printed one at a time, and a new batch only starts when the previous one is close to sold
          out.
        </p>
        <ol className="steps">
          {steps.map(([title, text], i) => (
            <li key={title} className="step">
              <span className="step__label">
                Step {i + 1} · {title}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
