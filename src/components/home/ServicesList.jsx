import { useState } from "react";
import { services } from "../../data/siteData";

export default function ServicesList() {
  const [openId, setOpenId] = useState(
    services.find((s) => s.open)?.id ?? services[0].id
  );

  return (
    <section className="mx-auto max-w-8xl px-6 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <h2 className="max-w-sm font-display text-3xl font-medium leading-snug md:text-4xl">
          Offering an array of services in the fields of architecture &amp; interior design.
        </h2>

        <div className="divide-y divide-line border-t border-line">
          {services.map((s) => {
            const isOpen = openId === s.id;
            return (
              <div key={s.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : s.id)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs text-stone">{s.id}</span>
                    <span className="font-display text-xl md:text-2xl">{s.title}</span>
                  </span>
                  <span
                    className={`text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    ↓
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden max-w-md text-sm leading-relaxed text-stone">
                    {s.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
