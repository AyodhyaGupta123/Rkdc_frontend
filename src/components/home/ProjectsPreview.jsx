import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/siteData";

export default function ProjectsPreview() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <SectionHeading title="Projects Preview" linkLabel="View more" to="/gallery" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.id} to="/gallery" className="group block overflow-hidden rounded-[4px]">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-3 text-sm font-medium">{p.title}</p>
              <p className="text-xs uppercase tracking-widest2 text-stone">{p.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
