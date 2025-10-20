import type { ReactNode } from "react";

interface ButtonProps {
  buttonContent?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button = ({ buttonContent, onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus:outline-none text-white bg-emerald-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5"
    >
      {/* falls children existiert, zeig sie; sonst zeig den buttonContent */}
      {children ?? <span>{buttonContent ?? "Beschreibung fehlt"}</span>}
    </button>
  );
};

export default Button;