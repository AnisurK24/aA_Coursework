import React from "react";
import { Query } from "react-apollo";
import Queries from "../graphql/queries";
import { Link } from "react-router-dom";

const { FETCH_PRODUCTS } = Queries;

class ProductIndex extends React.Component {

  render(){
    return (
    <Query query={FETCH_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.products.map(product => (
              <Link to={`/product/${product._id}`} key={product._id} ><li key={product._id}>{product.name}</li></Link>
            ))}
          </ul>
        )
      }}
    </Query>
    )
  }
};

export default ProductIndex;
