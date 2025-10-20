import { useState } from "react";
import Button from "./buttonOnClick";
import placeholderImage from "../assets/images/placeholder-image.jpg";

interface CardProps {
  image?: string;
  title?: string;
  description?: string;
  url?: string;
  urlTitle?: string;
}

export default function Card({
  image,
  title,
  description,
  url,
  urlTitle,
}: CardProps) {
  // State für das aktuell angezeigte Bild (inkl. Fallback bei Fehler)
  const [imgSrc, setImgSrc] = useState(image ?? placeholderImage);

  // Wenn das Bild nicht geladen werden kann, setze Fallback
  const handleImageError = () => {
    console.warn(
      "Bild konnte nicht geladen werden – Platzhalter wird verwendet."
    );
    setImgSrc(placeholderImage);
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Titelbild */}
      <img
        src={imgSrc}
        alt={title ?? "Platzhalter"}
        onError={handleImageError}
        className="rounded-t-lg mb-4 w-full object-cover h-48"
      />

      {/* Titel */}
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title ?? "Noteworthy technology acquisitions 2021"}
      </h5>

      {/* Beschreibung */}
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description ??
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
      </p>

      {/* Button mit Link */}
      <Button>
        <a
          href={url ?? "#"}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white"
          onClick={(e) => {
            if (!url) {
              e.preventDefault();
              alert("Kein gültiger Link vorhanden!");
            }
          }}
        >
          {urlTitle ?? "Mehr erfahren"}
        </a>
      </Button>
    </div>
  );
}
