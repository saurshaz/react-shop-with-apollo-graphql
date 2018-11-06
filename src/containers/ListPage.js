import React from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Detail from "../components/Detail";
import NestedGrid from "../components/NestedGrid";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const ListPage = ({ data }) => {
  if (data.loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Link
        to="add"
        className="fixed bg-white top-0 right-0 pa4 ttu dim black no-underline"
      >
        <Button variant="contained" color="primary">
          + New Product
        </Button>
      </Link>
      <Grid container spacing={12}>
        <NestedGrid
          data={data.allOrderItems}
          render={orderItem => {
            return (
              <Detail
                key={orderItem.id}
                product={orderItem}
                refresh={() => data.refetch()}
              />
            );
          }}
        />
      </Grid>
    </div>
  );
};

const FeedQuery = gql`query allOrderItems {
  allOrderItems(orderBy: id_DESC) {
    id
    description
    miniDescription
    images {
      thumb
    }
  }
}`;

const ListPageWithData = graphql(FeedQuery, {
  options: {
    forcePolicy: "cache-and-network"
  }
})(ListPage);

export default ListPageWithData;
