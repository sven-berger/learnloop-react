interface ButtonFormProps {
  buttonContentSubmit: string;
  buttonContentReset?: string;
}

const ButtonForm = ({
  buttonContentSubmit
}: ButtonFormProps) => {
  return (
    <div className="flex gap-3">
      <button
        type="submit"
        className="focus:outline-none text-white bg-emerald-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5"
      >
        <span>{buttonContentSubmit ?? "Beschreibung fehlt"}</span>
      </button>
    </div>
  );
};

export default ButtonForm;