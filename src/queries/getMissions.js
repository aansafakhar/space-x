import { gql } from "@apollo/client";

const GET_MISSIONS = gql`
  { 
    missions {
      description
      id
      manufacturers
      name
      twitter
      website
    } 
  }
`;

export default GET_MISSIONS;
