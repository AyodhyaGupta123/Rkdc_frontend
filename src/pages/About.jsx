export default function About() {
  const editorialImages = [
    {
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      title: "Residential Interiors",
      text: "Warm, functional living spaces shaped by comfort, detail, and a refined sense of everyday luxury.",
    },
    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      title: "3D Elevation Concepts",
      text: "Modern elevation studies that help clients visualize scale, proportion, and the architectural character of the project.",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      title: "Structure & Working Drawings",
      text: "Precise technical documentation that transforms ideas into buildable construction decisions with clarity.",
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      title: "Exterior & Landscape Design",
      text: "A balanced combination of form, materials, and outdoor planning that extends the beauty of the built environment.",
    },
  ];

  return (
    <div className="bg-paper pb-20 pt-28">
      <section className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="overflow-hidden rounded-[8px] border border-line bg-offwhite">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-xs uppercase tracking-[0.22em] text-stone">About us</p>
              <h1 className="mt-6 font-display text-5xl leading-none text-ink md:text-6xl">
                Turning ideas into spaces that feel practical, beautiful, and enduring.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">
                RK Dwelling Creation is a design and execution-focused studio dedicated to planning,
                designing, and delivering architecture and interior solutions with clarity and care.
                Our work covers residential projects, exterior and interior detailing, elevation
                studies, structural and working drawings, permission documentation, Vastu planning,
                cost estimation, landscaping, and construction support.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-stone">
                We combine creative vision with technical accuracy to help clients move confidently
                from initial concept to final execution. Every decision is shaped around function,
                long-term value, and the lifestyle the space is meant to support.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-widest2 text-ink">
                  Planning
                </span>
                <span className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-widest2 text-ink">
                  Designing
                </span>
                <span className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-widest2 text-ink">
                  3D Elevation
                </span>
                <span className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-widest2 text-ink">
                  Construction
                </span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"
              alt="Modern architectural project"
              className="h-[420px] w-full object-cover lg:h-full"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-8xl px-6 lg:px-10">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-stone">Our work</p>
          <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
            Professional services shaped around planning, design, and execution.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {editorialImages.map((image) => (
            <article key={image.title} className="group overflow-hidden rounded-[8px] border border-line bg-offwhite">
              <img
                src={image.src}
                alt={image.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-stone">Detail</p>
                <h3 className="mt-3 text-lg font-medium text-ink">{image.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{image.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-8xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone">Our approach</p>
            <h2 className="mt-4 font-display text-3xl text-ink">From concept to completion with clarity and control.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:col-span-2">
            <div>
              <p className="font-display text-4xl text-ink">01</p>
              <h3 className="mt-4 text-lg font-medium text-ink">Plan</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                We begin with detailed planning, site understanding, and a clear project direction.
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-ink">02</p>
              <h3 className="mt-4 text-lg font-medium text-ink">Design</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                Our team develops thoughtful layouts, elevations, interiors, and technical documentation.
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-ink">03</p>
              <h3 className="mt-4 text-lg font-medium text-ink">Build</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                We support execution with accurate drawings, estimation, and construction coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-8xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
            alt="Interior design detail"
            className="h-[420px] w-full rounded-[8px] object-cover"
          />
          <div className="flex items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Why choose us</p>
              <h3 className="mt-4 font-display text-4xl text-ink">Design guidance rooted in practicality and detail.</h3>
              <p className="mt-5 text-base leading-relaxed text-stone">
                RK Dwelling Creation brings together strategy, aesthetics, and execution to help
                clients move smoothly from idea to construction. We focus on thoughtful design that
                remains functional, buildable, and visually confident.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone">
                Our process balances creative direction, accurate documentation, and site-level
                execution support, so each project is shaped with clarity and delivered with quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-8xl px-6 lg:px-10">
        <div className="rounded-[8px] border border-line bg-offwhite p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Our values</p>
            </div>
            <div>
              <p className="text-lg font-medium text-ink">Practical creativity</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                We create design solutions that are imaginative, usable, and aligned with how people actually live and build.
              </p>
            </div>
            <div>
              <p className="text-lg font-medium text-ink">Precision in execution</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                Every drawing, detail, and recommendation is shaped to support a smoother and more reliable construction journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
