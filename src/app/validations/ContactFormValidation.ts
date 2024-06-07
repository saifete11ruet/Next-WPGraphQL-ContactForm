import { z } from "zod";
import { Dispatch, SetStateAction } from "react";

export const validate = (
  data: any,
  setErrors: Dispatch<SetStateAction<Record<string, string>>>,
  schema: z.ZodObject<any>
): boolean => {
  try {
    schema.parse(data);
    setErrors({});
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
    }
    return false;
  }
};
