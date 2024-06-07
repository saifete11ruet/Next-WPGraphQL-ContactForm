"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { validate } from "../validations/ContactFormValidation";
import {
  buildContactFormSchema,
  ContactFormType,
  FormFieldType,
} from "../schemas/ContactFormSchema";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CONTACT_FORM } from "../graphql/queries";
import { SUBMIT_CONTACT_DATA } from "../graphql/mutations";
import generateFieldValues from "../utils/generateFieldValues";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
import setNewFormData from "../utils/setNewFormData";
import InputField from "./InputField";
import Spinner from "./ui/Spinner";
import Success from "./ui/Success";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormType>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Query to fetch the contact form schema from api
  const { data, loading, error } = useQuery(GET_CONTACT_FORM);
  const formFields = data?.gfForm?.formFields?.nodes || [];
  const contactFormSchema = buildContactFormSchema(formFields);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const newFormData = setNewFormData(
      {
        ...formData,
        [name]: value,
      },
      setFormData,
      formFields
    );
    validate(newFormData, setErrors, contactFormSchema);
  };

  // Mutation to submit form data
  const [submitContactData, { loading: submitting }] =
    useMutation(SUBMIT_CONTACT_DATA);

  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage("");
    setSubmitError("");

    const newFormData = setNewFormData(formData, setFormData, formFields);

    if (validate(newFormData, setErrors, contactFormSchema)) {
      const fieldValues = generateFieldValues(newFormData, formFields);
      try {
        const response = await submitContactData({
          variables: {
            input: {
              fieldValues,
              id: "1",
            },
          },
        });

        const responseError = response.data?.submitGfForm?.errors;
        if (responseError) {
          setSubmitError("Sending Message Failed!");
        } else {
          setSuccessMessage("Message sent successfully");
          setFormData({});
        }
      } catch (error) {
        setSubmitError("Sending Message Failed!");
      }
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>

      {successMessage && <Success message={successMessage}></Success>}
      {submitError && <Error message={submitError}></Error>}

      {formFields.map((field: FormFieldType) => {
        return (
          <InputField
            key={field.databaseId}
            formData={formData}
            field={field}
            onChange={handleChange}
            errors={errors}
          />
        );
      })}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Spinner />
            <span className="ml-2">Sending...</span>
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
