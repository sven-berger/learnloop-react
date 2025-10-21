import ButtonForm from "./buttonForm";
interface InputField {
  name: string;
  value: string;
  label: string;
  type: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormProps {
  fields: InputField[];
  onSubmit: (e: React.FormEvent) => void;
}

export default function FormSubmit({ fields, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-1 font-medium">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
      ))}

      <ButtonForm
        buttonContentSubmit="Vergleichen"
        buttonContentReset="Zurücksetzen"
      />
    </form>
  );
}
