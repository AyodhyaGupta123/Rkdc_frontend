import { projects } from "../data/siteData";

export default function Gallery() {
  return (
    <div className="bg-paper pb-20 pt-28">
      <section className="mx-auto max-w-8xl px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.22em] text-stone">Gallery</p>
        <h1 className="mt-6 font-display text-5xl leading-none text-ink md:text-6xl">
          Selected work
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone">
          A curated view of our architecture and interior projects, shaped by material honesty,
          light, and thoughtful use of space.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group overflow-hidden rounded-[8px] border border-line bg-offwhite">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <p className="text-sm font-medium text-ink">{project.title}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-stone">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
