import SectionHeading from "../ui/SectionHeading";
import { newsPosts } from "../../data/siteData";

export default function News() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <SectionHeading title="Recent news and events" linkLabel="View more" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <a key={post.title} href="#" className="group block">
              <div className="relative overflow-hidden rounded-[4px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 top-4 bg-ink/85 px-3 py-2 text-center leading-none text-white backdrop-blur-sm">
                  <span className="block font-display text-lg">{post.day}</span>
                  <span className="block text-[10px] uppercase tracking-widest2">{post.month}</span>
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest2 text-stone">{post.tag}</p>
              <p className="mt-1 font-display text-lg font-medium group-hover:opacity-70">
                {post.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
