import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../data/siteData";

export default function Navbar({ transparentOnTop = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change and on Escape
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHomePage = location.pathname === "/";
  const isDark = !transparentOnTop || scrolled || !isHomePage || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isDark ? "border-b border-line bg-paper/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-5 lg:px-10">
        
        {/* Modern & Professional Borderless Logo */}
        <Link 
          to="/" 
          className="group relative flex items-center gap-1 py-1" 
          aria-label="RKDC home"
        >
          <span
            className={`font-display text-xl font-bold tracking-[0.18em] transition-colors duration-300 ${
              isDark ? "text-ink" : "text-white"
            }`}
          >
            RKDC
          </span>
          {/* Accent dot for modern branding */}
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 transition-transform duration-300 group-hover:scale-150" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative text-xs uppercase tracking-[0.22em] transition-colors duration-200 hover:opacity-100 ${
                  isDark ? "text-ink" : "text-white"
                } ${isActive ? "opacity-100" : "opacity-80"}`
              }
            >
              {({ isActive }) => (
                <span
                  className={`relative inline-flex items-center after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-200 ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  }`}
                >
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden ${
            isDark ? "border-ink/20 bg-ink/5 text-ink" : "border-white/30 bg-white/5 text-white"
          }`}
        >
          <span className="relative flex h-4 w-5 items-center justify-center">
            <span
              className={`absolute h-px w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-px w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`grid overflow-hidden bg-paper transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="overflow-hidden">
          <ul className="flex flex-col gap-1 border-t border-line px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `block py-2 text-sm uppercase tracking-[0.2em] transition-colors ${
                      isActive ? "text-ink" : "text-ink/70"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}