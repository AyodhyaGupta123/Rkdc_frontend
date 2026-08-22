import { disciplines } from "../../data/siteData";

const icons = {
  Commercial: (
    <path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6M4 9h16" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Residential: (
    <path d="M6 21V6h5v15M11 10h5v11" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Hospitality: (
    <path d="M3 15c3-4 6-4 9 0s6 4 9 0M3 19c3-4 6-4 9 0s6 4 9 0" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Multipurpose: (
    <path d="M5 21V4h9v6h5v11H5zm4-11h5" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function Disciplines() {
  return (
    <section className="mx-auto max-w-8xl px-6 py-24 lg:px-10">
      <p className="max-w-xl font-display text-2xl leading-snug md:text-3xl">
        What sets us apart from the rest is our visionary goal &amp; truly unique designs that are
        specially curated to perfection for our clients.
      </p>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map((d) => (
          <div key={d.id}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-ink">
              {icons[d.title]}
            </svg>
            <h3 className="mt-5 font-display text-lg font-medium">{d.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{d.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
