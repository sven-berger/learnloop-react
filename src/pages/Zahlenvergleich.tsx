import FormSubmit from "../components/formSubmit";

export default function Zahlenvergleich() {
  return (
    <FormSubmit
      fields={[
        {
          name: "letter1",
          label: "Zahl #1",
          placeholder: "Erste Zahl",
          type: "number",
        },
        {
          name: "letter2",
          label: "Zahl #2",
          placeholder: "Zweite Zahl",
          type: "number",
        },
      ]}
      onSubmit={(data) => console.log("Nachricht gesendet:", data)}
    />
  );
}
