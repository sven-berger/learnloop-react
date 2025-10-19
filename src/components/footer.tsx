import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 pt-3">
      <Link to="/impressum">Impressum</Link>
      <Link to="/datenschutzerklaerung" className="ml-4">
        Datenschutzerklaerung
      </Link>
    </footer>
  );
}