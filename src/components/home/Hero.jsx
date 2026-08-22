import { useEffect, useState } from "react";
import { heroBackgroundImages, heroSlides } from "../../data/siteData";

export default function Hero() {
  const slide = heroSlides[0];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % heroBackgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background Images */}
      {heroBackgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 overflow-hidden transition-opacity duration-[1400ms] ease-in-out ${
            index === activeIndex
              ? "z-[1] opacity-100"
              : "z-0 opacity-0"
          }`}
        >
          {/* Smooth Professional Grow */}
          <div
            className={`h-full w-full ${
              index === activeIndex ? "hero-grow-active" : "hero-grow"
            }`}
          >
            <img
              src={image}
              alt="Modern architectural interior"
              className="h-full w-full object-cover object-center"
              draggable="false"
            />
          </div>
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[2] bg-[#1d2122]/45" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/75 via-black/20 to-black/35" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-8xl flex-col items-center justify-center px-4 pb-12 pt-4 text-center sm:px-6 lg:px-10">
        <p className="mb-4 max-w-[240px] text-[10px] uppercase tracking-[0.18em] text-white/80 sm:mb-6 sm:max-w-xs sm:text-xs md:text-sm">
          {slide.kicker}
        </p>

        <h1 className="font-display text-[18vw] font-semibold uppercase leading-[0.72] tracking-[-0.07em] text-white sm:text-[12vw] lg:text-[7.3vw]">
          {slide.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom Caption */}
      <div className="absolute bottom-6 left-4 z-10 max-w-[200px] text-left sm:bottom-8 sm:left-6 lg:left-10">
        <p className="text-[10px] uppercase tracking-[0.16em] text-white/70 sm:text-[11px]">
          {slide.caption}
        </p>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 right-4 z-10 flex gap-2 sm:bottom-8 sm:right-6 lg:right-10">
        {heroBackgroundImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full border border-white/20 transition-all duration-300 ${
              index === activeIndex
                ? "bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.18)]"
                : "bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <style>{`
        .hero-grow {
          transform: scale(1);
          transform-origin: center center;
          will-change: transform;
        }

        .hero-grow-active {
          animation: heroGrow 6500ms linear forwards;
          transform-origin: center center;
          will-change: transform;
        }

        @keyframes heroGrow {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.10);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-grow-active {
            animation: none;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}