import type { ReactNode } from "react";

interface SectionProps {
  sectionTitle?: string;
  sectionContent?: string;
  children?: ReactNode;
}

const Section = ({ sectionTitle, sectionContent, children }: SectionProps) => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white p-3 border-t border-l border-r rounded-t-lg bg-emerald-600">
        {sectionTitle ?? "Titel fehlt"}
      </h2>
      <div className="text-gray-700 p-6 mb-4 rounded-b-lg border-gray-100 border-b border-l border-r bg-white shadow-sm">
        {children ?? sectionContent ?? "Hier steht der Standardinhalt."}
      </div>
    </section>
  );
};

export default Section;