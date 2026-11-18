/** Who makes these, and how to get in touch. */
export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="wrap about">
        <div className="about__photo">[Photo at the bench]</div>
        <div className="about__copy">
          <h2 id="about-heading">Hi, I'm wallago</h2>
          <p className="lead">
            Software engineer in automotive embedded systems. [A few lines on why you build these,
            what you care about in a tool, and what is next.]
          </p>
          <div className="about__links" id="contact">
            <a href="https://github.com/wallago">GitHub</a>
            <span>[contact email]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
