import { Link } from "react-router-dom";
import { workItems } from "../data/siteData";

export default function Work() {
  return (
    <div className="bg-paper pb-20 pt-28">
      <section className="mx-auto max-w-8xl px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.22em] text-stone">Our work</p>
        <h1 className="mt-6 font-display text-5xl leading-none text-ink md:text-6xl">
          Professional spaces with lasting impact.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone">
          From planning and elevation design to interior detailing and construction execution,
          we create spaces that are practical, refined, and built to perform beautifully.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workItems.map((item) => (
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
                <h2 className="font-display text-2xl leading-tight text-ink">{item.title}</h2>
                <p className="text-sm leading-relaxed text-stone">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
