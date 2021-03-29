import { gql } from "@apollo/client";

const GET_COMPANYDATA = gql`
  { 
    company {
      headquarters {
        address
        state
        city
      }
      ceo
      cto
      coo
      founder
      founded
      name
      summary
    }
  }
`;

export default GET_COMPANYDATA;
