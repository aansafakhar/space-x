import { gql } from "@apollo/client";

const GET_SHIP = gql`
  query ship($id: ID!){
    ship(id: $id) {
      id
      image
      missions {
        flight
        name
      }
      name
      roles
      url
      year_built
      weight_lbs
      weight_kg
      type
    }
  }
`;

export default GET_SHIP;
