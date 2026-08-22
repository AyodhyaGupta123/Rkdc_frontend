import { Link } from "react-router-dom";
import { workItems } from "../../data/siteData";

export default function WorkPreview() {
  return (
    <section className="mx-auto max-w-8xl px-6 py-24 lg:px-10">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-stone">Our work</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Thoughtful design, built with precision.
          </h2>
        </div>

        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-70"
        >
          View all work
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {workItems.slice(0, 6).map((item) => (
          <Link
            key={item.slug}
            to={`/work/${item.slug}`}
            className="group overflow-hidden rounded-[12px] border border-line bg-offwhite shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.2em] text-stone">{item.category}</p>
                <span className="text-lg text-ink transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
              <h3 className="font-display text-2xl leading-tight text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-stone">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
