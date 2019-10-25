import gql from "graphql-tag";


export default {
  FETCH_PRODUCTS: gql`
    query FetchProducts {
      products {
        _id
        name
        description
      }
    }
  `,
  FETCH_PRODUCT: gql`
    query FetchProduct($id: ID!) {
        product(_id: $id) {
        _id
        name
        description
        weight
      }
    }
  `,
  // it's this simple to query our cache!
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `
};