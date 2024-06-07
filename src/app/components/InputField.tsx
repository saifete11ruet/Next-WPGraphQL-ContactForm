import { ChangeEvent } from "react";
import { FormFieldType } from "../schemas/ContactFormSchema";

type InputFieldPropType = {
  formData: Record<string, string>;
  field: FormFieldType;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: Record<string, string>;
};

const InputField = ({
  formData,
  field,
  onChange,
  errors,
}: InputFieldPropType) => {
  const { inputType, label, databaseId, isRequired } = field;
  const fieldType = inputType.toLowerCase();
  const errorMessage = errors[label];

  let inputElement;
  if (inputType === "TEXT" || inputType === "EMAIL") {
    inputElement = (
      <input
        type={fieldType}
        id={String(databaseId)}
        name={label}
        value={formData[label] || ""}
        onChange={onChange}
        className={`w-full p-3 border rounded-lg focus:outline-none ${
          errorMessage ? "border-red-500" : "border-gray-300"
        }`}
      />
    );
  } else if (inputType === "TEXTAREA") {
    inputElement = (
      <textarea
        id={String(databaseId)}
        name={label}
        value={formData[label] || ""}
        onChange={onChange}
        className={`w-full p-3 border rounded-lg focus:outline-none ${
          errorMessage ? "border-red-500" : "border-gray-300"
        }`}
        rows={4}
      ></textarea>
    );
  }

  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-gray-700 font-medium mb-2">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      {inputElement}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
