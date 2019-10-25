import React from "react";
import { Query } from "react-apollo";
import Queries from "../graphql/queries";

const { FETCH_PRODUCT } = Queries;

class ProductShow extends React.Component {

  render(){
    const id = this.props.match.params.id
    return(
    <Query 
      query={FETCH_PRODUCT} 
      variables={{ id: id }}
      >
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <div>
            <h1>HELLO</h1>
            <h2>Name: {data.product.name}</h2>
            <h2>Description: {data.product.description}</h2>
            <h2>Weight: {data.product.weight} lb</h2>
          </div>
        )
      }}
    </Query>
    )
  }
  
};

export default ProductShow;
