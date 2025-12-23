import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { navLinks } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  //  1. Lock body scroll

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  //  2. Navbar blur on scroll
  useGSAP(() => {
    gsap.fromTo(
      "nav",
      { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "#00000080",
        backdropFilter: "blur(10px)",
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
        },
      }
    );
  }, []);

  //  3. Mobile menu open + stagger
  useGSAP(() => {
    if (!menuRef.current) return;

    gsap.to(menuRef.current, {
      height: isOpen ? "auto" : 0,
      duration: 0.35,
      ease: "power2.out",
    });

    if (isOpen) {
      gsap.fromTo(
        itemsRef.current,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.35,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  //  4. Active section highlighting
  useGSAP(() => {
    navLinks.forEach((link) => {
      ScrollTrigger.create({
        trigger: `#${link.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(link.id),
        onEnterBack: () => setActive(link.id),
      });
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between flex-row">
        <a href="#hero" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <span className="font-semibold text-lg hover:text-yellow">
            Cobbler & Crew
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors hover:text-yellow ${
                  active === link.id ? "text-yellow" : ""
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger / Close */}
        <button
          className="md:hidden relative w-6 h-6"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`absolute w-6 h-[2px] right-0.5 bg-white transition-transform ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] right-0.5 bg-white transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] right-0.5 bg-white transition-transform ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black/90 backdrop-blur-lg overflow-hidden"
          style={{ height: 0 }}
        >
          <div className="px-6 py-6">
            <ul className="flex flex-col gap-6 text-lg">
              {navLinks.map((link, i) => (
                <li key={link.id} ref={(el) => (itemsRef.current[i] = el)}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block ${
                      active === link.id ? "text-yellow" : ""
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
