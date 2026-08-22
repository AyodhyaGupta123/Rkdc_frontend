import Hero from "../components/home/Hero";
import Disciplines from "../components/home/Disciplines";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ServicesList from "../components/home/ServicesList";
import WorkPreview from "../components/home/WorkPreview";
import Banner from "../components/home/Banner";
import Stats from "../components/home/Stats";
import News from "../components/home/News";

export default function Home() {
  const whatsappNumber = "8103078916";

  return (
    <>
      <Hero />
      <Disciplines />
       <WorkPreview />
     
      <ServicesList />
      <ProjectsPreview />
      <Banner />
      <Stats />
      <News />

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to discuss a project with you.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group fixed bottom-16 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-[#25D366] text-white shadow-[0_0_0_6px_rgba(37,211,102,0.18),0_18px_38px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_0_8px_rgba(37,211,102,0.20),0_20px_42px_rgba(37,211,102,0.42)] animate-[pulse_2.2s_ease-in-out_infinite]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 blur-[10px] transition-opacity duration-300 group-hover:opacity-100 animate-[pulse_2.2s_ease-in-out_infinite]" />
        <svg viewBox="0 0 24 24" aria-hidden="true" className="relative z-10 h-7 w-7 fill-current">
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.06 0C5.48 0 .14 5.34.14 11.92c0 2.1.55 4.14 1.6 5.94L.08 24l6.3-1.66a11.93 11.93 0 0 0 5.68 1.72h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.16-3.47-8.38ZM12.06 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.74.98 1-3.64-.23-.37A9.82 9.82 0 0 1 2.22 11.9a9.87 9.87 0 1 1 17.71 6.99 9.83 9.83 0 0 1-7.87 3.91Zm5.42-7.38c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.08-.17-.3-.02-.46.14-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.18 0-.48.07-.73.35-.25.28-1 .98-1 2.39s1.02 2.77 1.16 2.96c.14.2 2 3.06 4.84 4.29.68.3 1.2.48 1.61.61.68.22 1.3.19 1.79.12.55-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  );
}
