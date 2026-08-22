import { Link, useParams } from "react-router-dom";
import { workItems } from "../data/siteData";

export default function WorkDetail() {
  const { slug } = useParams();
  const item = workItems.find((entry) => entry.slug === slug) ?? workItems[0];

  return (
    <div className="bg-paper pb-20 pt-28">
      <section className="mx-auto max-w-6xl px-6 lg:px-10">
        <Link to="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-stone hover:opacity-70">
          <span aria-hidden>←</span>
          Back to work
        </Link>

        <div className="mt-8 overflow-hidden rounded-[16px] border border-line bg-offwhite shadow-sm">
          <img src={item.image} alt={item.title} className="h-[420px] w-full object-cover md:h-[540px]" />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">{item.category}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone">{item.description}</p>
          </div>

          <div className="rounded-[12px] border border-line bg-offwhite p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-stone">Project scope</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
