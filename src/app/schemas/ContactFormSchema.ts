import { z } from "zod";

export type FormFieldType = {
  inputType: string;
  databaseId: number;
  isRequired: boolean;
  label: string;
};

export const buildContactFormSchema = (fields: FormFieldType[]) => {
  const schemaFields: Record<string, z.ZodTypeAny> = {};

  fields.forEach((field) => {
    const key = field.label;

    if (field.inputType === "TEXT") {
      schemaFields[key] = field.isRequired
        ? z.string().min(1, `${field.label} is required`)
        : z.string().optional();
    } else if (field.inputType === "EMAIL") {
      schemaFields[key] = field.isRequired
        ? z.string().email("Invalid email address")
        : z
            .string()
            .refine(
              (value) =>
                value === "" || z.string().email().safeParse(value).success,
              "Invalid email address"
            );
    } else if (field.inputType === "TEXTAREA") {
      schemaFields[key] = field.isRequired
        ? z.string().min(1, `${field.label} is required`)
        : z.string().optional();
    }
  });

  return z.object(schemaFields);
};

export type ContactFormType = z.infer<
  ReturnType<typeof buildContactFormSchema>
>;
