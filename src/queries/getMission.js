import { gql } from "@apollo/client";

const GET_MISSION = gql`
  query mission($id: ID!){
    mission(id: $id) {
      id
      description
      name
      manufacturers
      twitter
      website
    }
  }
`;

export default GET_MISSION;
