export default function Banner() {
  return (
    <section className="relative flex h-[70vh] min-h-[420px] items-end overflow-hidden bg-ink">
      <img
        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80"
        alt="Modern building exterior"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b1a1a]/70 via-[#1b1a1a]/20 to-[#1b1a1a]/30" />

      <div className="relative z-10 mx-auto w-full max-w-8xl px-6 pb-16 lg:px-10">
        <h2 className="font-display max-w-4xl text-4xl font-semibold uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
          Building spaces for every purpose since 2005
        </h2>
      </div>
    </section>
  );
}
