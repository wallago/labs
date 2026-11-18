/** Small print. */
export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>© {new Date().getFullYear()} wallago labs · Made in France</span>
        <span>Printed, assembled and tested by hand.</span>
      </div>
    </footer>
  );
}
