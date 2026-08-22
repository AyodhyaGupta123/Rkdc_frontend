import { useEffect, useRef, useState } from "react";
import { stats } from "../../data/siteData";

// Smooth Counting Hook
function useAnimatedCounter(endValue, start = false, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out expo formula for smooth slowing down at the end
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, start, duration]);

  return count;
}

// Sub-component for individual Animated Stat Card
function StatItem({ value, label, isVisible, index }) {
  const numericValue = Number.parseInt(value, 10) || 0;
  const count = useAnimatedCounter(numericValue, isVisible, 2000);
  const suffix = value.replace(/[0-9]/g, ""); // Automatically keeps +, %, K, etc.

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }} // Staggered entry animation
    >
      <p className="font-display text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">
        {isVisible ? count : 0}
        <span className="text-amber-600">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-medium text-stone-500 leading-relaxed">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center">
        <h2
          className={`max-w-sm font-display text-3xl font-medium leading-snug md:text-4xl transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Well-established and experienced in many fields.
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
          {stats.map((s, index) => (
            <StatItem
              key={s.label}
              value={s.value}
              label={s.label}
              isVisible={visible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}