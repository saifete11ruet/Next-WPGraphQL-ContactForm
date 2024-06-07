import { gql } from "@apollo/client";

export const SUBMIT_CONTACT_DATA = gql`
  mutation SubmitContactData($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      errors {
        message
        id
      }
    }
  }
`;
