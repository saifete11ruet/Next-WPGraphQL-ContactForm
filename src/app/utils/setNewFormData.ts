import { Dispatch, SetStateAction } from "react";
import { FormFieldType } from "../schemas/ContactFormSchema";

type FormData = {
  [key: string]: string;
};

const setNewFormData = (
  formData: FormData,
  setFormData: Dispatch<SetStateAction<FormData>>,
  fields: FormFieldType[]
) => {
  const newFormData = { ...formData };
  fields.forEach((field: FormFieldType) => {
    if (!formData.hasOwnProperty(field.label)) {
      newFormData[field.label] = "";
    }
  });
  setFormData(newFormData);
  return newFormData;
};

export default setNewFormData;
