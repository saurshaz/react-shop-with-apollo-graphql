import React from "react";
import { Link } from "react-router-dom";
import { graphql} from "react-apollo";
import gql from "graphql-tag";
import {
  Button,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";

// TODO: rm hardcoding, take values from form only for image URLs
const ADD_PRODUCT = gql`mutation newOrderItem($description: String!, $miniDescription: String!, $discount: Int!, $price: Int!) {
  createOrderItem(
    description: $description,
    miniDescription: $miniDescription,
    discount: $discount,
    price: $price,
    images:{
      thumb: "https://lorempixel.com/400/200/sports/shop-me-here/",
      small:"https://lorempixel.com/600/400/sports/shop-me-here/",
      large:"https://lorempixel.com/1200/800/sports/shop-me-here/"
    }
  ) {
    id
    description
    miniDescription
    images {
      thumb
      small
      large
    }
  }
}`;


class AddPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  addOrderItem(){
    const { description, miniDescription, price, discount } = this.state;
    this.props
      .mutate({
        variables: { description, miniDescription, price, discount }
      })
      .then(data => {
        console.log("product added");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render(){
    return (
      <div>
        <Link
          to="/"
          className="fixed bg-white top-0 right-0 pa4 ttu dim black no-underline"
        >
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Add a Product
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                autoComplete="description"
                onChange={e => this.setState({ description: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="miniDescription"
                name="miniDescription"
                label="mini Description"
                fullWidth
                autoComplete="miniDescription"
                onChange={e => this.setState({ miniDescription: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="price"
                name="price"
                label="Price"
                fullWidth
                autoComplete="price"
                onChange={e => this.setState({ price: parseInt(e.target.value || 0, 10) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="discount"
                name="discount"
                label="Discount(in percentage)"
                fullWidth
                autoComplete="discount"
                onChange={e => this.setState({ discount: parseInt(e.target.value || 0, 10) })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addOrderItem.bind(this)}
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
};

export default graphql(ADD_PRODUCT)(AddPage);
// export default AddPage;
