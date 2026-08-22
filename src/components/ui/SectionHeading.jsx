import { Link } from "react-router-dom";

export default function SectionHeading({ title, linkLabel, onLinkClick, to }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <h2 className="font-display text-3xl md:text-4xl font-medium">{title}</h2>
      {linkLabel && (
        to ? (
          <Link to={to} className="link-underline shrink-0 hidden sm:inline-flex">
            {linkLabel} <span aria-hidden>→</span>
          </Link>
        ) : (
          <button onClick={onLinkClick} className="link-underline shrink-0 hidden sm:inline-flex">
            {linkLabel} <span aria-hidden>→</span>
          </button>
        )
      )}
    </div>
  );
}
