import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Schließt bei Klick außerhalb
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="bg-white border border-gray-200 rounded mb-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-3">
        <div className="flex items-center gap-4">
          <NavLink to="/" end className="font-semibold">
            Startseite
          </NavLink>
          <NavLink to="/zahlenvergleich/" className="hover:underline">
            Zahlenvergleich
          </NavLink>
          <NavLink to="/about/profile" className="hover:underline">
            Profil
          </NavLink>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            ref={btnRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="menu"
            aria-expanded={open}
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            Snippets
            <svg
              aria-hidden
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              viewBox="0 0 20 20" fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          <div
            ref={menuRef}
            role="menu"
            aria-label="Snippets"
            className={`absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition
              ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <ul className="py-1 text-sm">
              <li>
                <NavLink
                  to="/snippets/useeffect/"
                  className="block px-3 py-2 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  useEffect
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/snippets/usestate/"
                  className="block px-3 py-2 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  useState
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}