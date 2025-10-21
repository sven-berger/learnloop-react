import FormSubmit from "../components/formSubmit";
import Section from "../components/section";
import ButtonForm from "../components/buttonForm";
import Content from "../components/content";
import { useState } from "react";

export default function Zahlenvergleich() {
  const [zahl1, setZahl1] = useState("");
  const [zahl2, setZahl2] = useState("");
  const [ergebnis, setErgebnis] = useState("");

  function handleVergleich(e: React.FormEvent) {
    e.preventDefault();
    const num1 = Number(zahl1);
    const num2 = Number(zahl2);

    if (isNaN(num1) || isNaN(num2))
      return setErgebnis("Bitte beide Zahlen eingeben!");
    if (num1 > num2)
      return setErgebnis(`Zahl #1 (${num1}) ist größer als Zahl #2 (${num2}).`);
    if (num1 < num2)
      return setErgebnis(`Zahl #2 (${num2}) ist größer als Zahl #1 (${num1}).`);
    setErgebnis(`Beide Zahlen sind gleich groß (${num1}).`);
  }

  return (
    <div className="space-y-4">
      <Section sectionTitle="Zahlenvergleich">
        <FormSubmit
          fields={[
            {
              name: "zahl1",
              value: zahl1,
              label: "Zahl #1",
              onChange: (e) => setZahl1(e.target.value),
              placeholder: "Erste Zahl",
              type: "number",
            },
            {
              name: "zahl2",
              value: zahl2,
              label: "Zahl #2",
              onChange: (e) => setZahl2(e.target.value),
              placeholder: "Zweite Zahl",
              type: "number",
            },
          ]}
          onSubmit={handleVergleich}
        />
      </Section>
      {ergebnis && (
        <Content
          content={
            <p>{ergebnis}</p>
          }
        />
      )}
    </div>
  );
}
