import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  // eigener State pro Dropdown
  const [openACP, setOpenACP] = useState(false);
  const [openSnip, setOpenSnip] = useState(false);

  // eigene Refs pro Dropdown
  const acpBtnRef = useRef<HTMLButtonElement>(null);
  const acpMenuRef = useRef<HTMLDivElement>(null);
  const snipBtnRef = useRef<HTMLButtonElement>(null);
  const snipMenuRef = useRef<HTMLDivElement>(null);

  // Outside-Click & Escape schließen beide
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;

      if (
        acpMenuRef.current &&
        acpBtnRef.current &&
        !acpMenuRef.current.contains(target) &&
        !acpBtnRef.current.contains(target)
      ) {
        setOpenACP(false);
      }
      if (
        snipMenuRef.current &&
        snipBtnRef.current &&
        !snipMenuRef.current.contains(target) &&
        !snipBtnRef.current.contains(target)
      ) {
        setOpenSnip(false);
      }
    }

    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenACP(false);
        setOpenSnip(false);
      }
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
          <NavLink to="/" end className="font-semibold">Startseite</NavLink>
          <NavLink to="/zahlenvergleich/" className="hover:underline">Zahlenvergleich</NavLink>
          <NavLink to="/about/profile" className="hover:underline">Profil</NavLink>
        </div>

        {/* ACP Dropdown */}
        <div className="relative">
          <button
            ref={acpBtnRef}
            type="button"
            onClick={() => {
              setOpenACP((o) => !o);
              setOpenSnip(false);
            }}
            aria-haspopup="menu"
            aria-expanded={openACP}
            className="inline-flex items-center gap-2 px-3 py-2"
          >
            Administrationsbereich
            <svg
              aria-hidden
              className={`h-4 w-4 transition-transform ${openACP ? "rotate-180" : ""}`}
              viewBox="0 0 20 20" fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          <div
            ref={acpMenuRef}
            role="menu"
            aria-label="ACP"
            className={`absolute right-0 mt-2 w-52 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition
              ${openACP ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <ul className="py-1 text-sm">
              <li>
                <NavLink
                  to="/acp/profiles/"
                  className="block px-3 py-2 hover:bg-gray-50"
                  onClick={() => setOpenACP(false)}
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Snippets Dropdown */}
        <div className="relative">
          <button
            ref={snipBtnRef}
            type="button"
            onClick={() => {
              setOpenSnip((o) => !o);
              setOpenACP(false); // optional: schließt das andere
            }}
            aria-haspopup="menu"
            aria-expanded={openSnip}
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            Snippets
            <svg
              aria-hidden
              className={`h-4 w-4 transition-transform ${openSnip ? "rotate-180" : ""}`}
              viewBox="0 0 20 20" fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          <div
            ref={snipMenuRef}
            role="menu"
            aria-label="Snippets"
            className={`absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition
              ${openSnip ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <ul className="py-1 text-sm">
              <li>
                <NavLink
                  to="/snippets/useeffect/"
                  className="block px-3 py-2 hover:bg-gray-50"
                  onClick={() => setOpenSnip(false)}
                >
                  useEffect
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/snippets/usestate/"
                  className="block px-3 py-2 hover:bg-gray-50"
                  onClick={() => setOpenSnip(false)}
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
