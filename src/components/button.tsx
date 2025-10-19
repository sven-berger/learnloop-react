import type { ReactNode } from "react";

interface ButtonProps {
  buttonContent?: string;
  onClick?: () => void;
  children?: ReactNode; // ✅ erlaubt beliebigen Inhalt zwischen <Button>...</Button>
}

const Button = ({ buttonContent, onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-5 focus:outline-none text-white bg-emerald-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {/* falls children existiert, zeig sie; sonst zeig den buttonContent */}
      {children ?? <span>{buttonContent ?? "Beschreibung fehlt"}</span>}
    </button>
  );
};

export default Button;