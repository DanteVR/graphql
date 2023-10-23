import { gql } from '@apollo/client';

export const RETRIEVE_CHARACTERS = gql`
  query Query {
    characters(page: 1, filter: { name: "Morty" }) {
      results {
        id
        name
        image
        species
      }
    }
  }
`;
