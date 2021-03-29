import { gql } from "@apollo/client";

const GET_SHIPS = gql`
  {
    ships {
      id
      image
      name
      roles
    }
  }
`;

export default GET_SHIPS;
