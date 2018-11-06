import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const deleteMutation = gql`
  mutation deleteOrderItem($id: ID!) {
    deleteOrderItem(id: $id) {
      id
    }
  }
`;

class Detail extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    mutate: PropTypes.func,
    refresh: PropTypes.func
  };

  render() {
    console.log(this.props.product);
    return (
      <div className="pa3 bg-black-05 ma3">
        <div className="pt3">
          <Typography component="h4" variant="display1" gutterBottom>
            {this.props.product.description}
          </Typography>
          <img
            src={this.props.product.images[0].thumb}
            alt={this.props.product.images[0].thumb}
          />
        </div>
        <div className="red f6 pointer dim" onClick={this.handleDelete}>
          <Button variant="contained" color="secondary">
            Add To Cart
          </Button>
          &nbsp;
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        </div>
      </div>
    );
  }

  handleDelete = () => {
    this.props
      .mutate({ variables: { id: this.props.product.id } })
      .then(this.props.refresh);
  };
}

const DetailWithMutation = graphql(deleteMutation)(Detail);

export default DetailWithMutation;
