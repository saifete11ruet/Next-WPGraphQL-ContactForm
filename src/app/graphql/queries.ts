import { gql } from "@apollo/client";

export const GET_CONTACT_FORM = gql`
  query NewQuery {
    gfForm(id: "1", idType: DATABASE_ID) {
      title
      formFields {
        nodes {
          databaseId
          ... on TextField {
            inputType
            isRequired
            label
          }
          ... on EmailField {
            inputType
            isRequired
            label
          }
          ... on TextAreaField {
            inputType
            isRequired
            label
          }
        }
      }
    }
  }
`;
