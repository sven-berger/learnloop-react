import { useState } from "react";
import Section from "./section";
import ButtonForm from "./buttonForm";

interface InputField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

interface FormProps {
  fields: InputField[];
  onSubmit: (data: Record<string, string>) => void;
}

export default function Form({ fields, onSubmit }: FormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section>
      <Section sectionTitle="Zahlenvergleich">
        <form onSubmit={handleSubmit} className="">
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block mb-1 font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-400"
              />
            </div>
          ))}
          <ButtonForm
            buttonContentSubmit="Vergleichen"
            buttonContentReset="Zurücksetzen"
          />
        </form>
      </Section>
    </section>
  );
}
