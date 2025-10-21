import Caption from "./caption";
import Section from "./section";

interface ProfileProps {
  name: string;
  title?: string;
  age?: number;
  location: string;
  email: string;
  phone: string;
  description: string;
}

export default function Profile({
  name,
  title,
  location,
  email,
  phone,
  description,
}: ProfileProps) {
  return (
    <Section sectionTitle="Über mich">
      <div className="grid items-center gap-4">
        <h2 className="text-xl font-semibold">
          {name ?? "Kein Name angegeben"}
        </h2>
        <Caption text={title ?? "Kein Titel angegeben"}/>

      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>{location ?? "Kein Ort angegeben"}</li>
        <li>{email ?? "Keine E-Mail Adresse angegeben"}</li>
        <li>{phone ?? "Keine Telefonnummer angegeben"}</li>
      </ul>
      <p className="border-t pt-5 mt-5">
        {description ?? "Keine Beschreibung vorhnaden"}
      </p>
    </Section>
  );
}
