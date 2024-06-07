import { FormFieldType } from "../schemas/ContactFormSchema";

type FormData = {
  [key: string]: string;
};

const generateFieldValues = (formData: FormData, fields: FormFieldType[]) => {
  return fields.map((field) => {
    const key = field.label;
    const value = formData[key];

    if (field.inputType === "EMAIL") {
      return {
        id: field.databaseId,
        emailValues: {
          value,
        },
      };
    }

    return {
      id: field.databaseId,
      value,
    };
  });
};

export default generateFieldValues;
