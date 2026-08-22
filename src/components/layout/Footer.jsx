import { useState } from "react";
import { footerData } from "../../data/siteData";

const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.4a1.56 1.56 0 0 1 .04 3.1ZM5.5 10.2h2.9v8.3H5.5v-8.3Zm5.2 0h2.8v1.1h.04c.4-.75 1.35-1.54 2.78-1.54 2.96 0 3.5 1.95 3.5 4.48v6.3h-2.9v-5.9c0-1.4-.03-3.21-1.96-3.21-1.96 0-2.26 1.53-2.26 3.11v5.99h-2.9v-8.3Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M21.6 7.2a2.95 2.95 0 0 0-2.08-2.09C17.78 4.74 12 4.74 12 4.74s-5.78 0-7.52.37A2.95 2.95 0 0 0 2.4 7.2 30.6 30.6 0 0 0 2 12a30.6 30.6 0 0 0 .4 4.8 2.95 2.95 0 0 0 2.08 2.09c1.74.37 7.52.37 7.52.37s5.78 0 7.52-.37a2.95 2.95 0 0 0 2.08-2.09A30.6 30.6 0 0 0 22 12a30.6 30.6 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  ),
  behance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M4 8.5h6.2c2.2 0 3.8 1.2 3.8 3.1s-1.5 3.1-3.8 3.1H4V8.5Zm0 0v7.2M18 8.5h-5.4v3.1h5.1M12.8 15.8h5.2M8.5 5.5h.1" />
      <path d="M17.1 5.5h3.4v3.4h-3.4z" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V7.5c0-.9.3-1.5 1.6-1.5H16V3.1c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.2V10.9H7v3.1h2.5v8h4Z" />
    </svg>
  ),
};

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-neutral-300">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10">
        
        {/* Top Section: High-Impact Call to Action */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-neutral-800/80 pb-16 lg:flex-row lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              Available for new projects
            </span>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something great together.
            </h3>
          </div>

          <a
            href={`mailto:${footerData.email}`}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-xl transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/20 active:scale-95"
          >
            <span>Get in touch</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center gap-4">
              <img
                src="/logo.png"
                alt="RK Dwelling Creation"
                className="h-20 w-20 object-cover rounded-xl bg-white/5 p-1 shadow-lg shadow-black/20"
              />
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                {footerData.brand}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-neutral-400 leading-relaxed">
              {footerData.tagline}
            </p>

            {/* Social Links with Modern Micro-Glow */}
            <div className="mt-8 flex items-center gap-2.5">
              {footerData.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-400 transition-all duration-300 hover:border-amber-500/40 hover:bg-neutral-800 hover:text-amber-400"
                >
                  {socialIcons[item.icon]}
                </a>
              ))}
            </div>
          </div>


          {/* Location & Details */}
          <div className="space-y-3 text-sm text-neutral-400 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-200">Headquarters</p>
            <div className="pt-2 leading-relaxed">
              {footerData.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {Array.isArray(footerData.phone) ? (
              footerData.phone.map((number) => (
                <p key={number} className="pt-1 font-medium text-neutral-200">
                  {number}
                </p>
              ))
            ) : (
              <p className="pt-3 font-medium text-neutral-200">{footerData.phone}</p>
            )}
            <p className="text-neutral-400 transition-colors hover:text-amber-400">
              <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
            </p>
          </div>

          {/* Sleek Interactive Newsletter */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-200">Stay in the Loop</p>
            <p className="mt-2 text-sm text-neutral-400">
              Subscribe for exclusive design insights and company updates.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-6 max-w-md">
              <input
                type="email"
                required
                placeholder="enter.your@email.com"
                className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/80 px-5 py-3.5 text-sm text-white placeholder-neutral-500 backdrop-blur-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 rounded-xl bg-amber-500 px-5 text-xs font-semibold text-neutral-950 transition-all hover:bg-amber-400 active:scale-95"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-900 pt-8 text-xs text-neutral-500 sm:flex-row">
          <p>{footerData.copyright}</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 font-medium text-neutral-400 transition-all hover:border-neutral-700 hover:text-white"
          >
            <span>Back to top</span>
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}