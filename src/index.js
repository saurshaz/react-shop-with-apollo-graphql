// @flow
import React from "react";
import { render } from "react-dom";
import List from "./containers/ListPage";
import Add from "./containers/AddPage";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// TODO: rm hardcoding from below
const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cj58c4w6oa0v50174rjf5dgme",
  credentials: 'include',
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
      <div>
        <Route exact path="/" component={List} />
        <Route path="/add" component={Add} />
      </div>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
