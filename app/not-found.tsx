import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="mn-status-page"><section><span className="mn-status-page__code">404</span><p className="mn-kicker">Page not found</p><h1>This route has not joined the learning path.</h1><p>The page may have moved. Return home or explore the flagship programme.</p><div className="mn-button-row"><Link className="mn-button mn-button--accent" href="/">Return Home</Link><Link className="mn-button mn-button--outline" href="/courses/data-analytics">Explore the Programme</Link></div></section></main>;
}

