#### tiny-shop ####
- uses `apollo-client`
- uses `graph.cool` as backend
- demonstrates `get` and `add` products
- uses `react-router` based routing
- simple test using `jest`
- `material-ui` based theming

#### Steps
- this is based on `create-react-app` so `yarn && yarn start` shall do it
- lookup `http://localhost:3000`
- `yarn test` for minimal tests written


#### References
- `graph.cool` docs site
- `codesandbox.io` & `github` examples
- `material-ui` documentation and examples

#### TODOs
- more elaborate testing
- `checkout`, `delete`, `add to cart` flows
- actual file uploads (used random images api for now)
- use `redux` for state management
- use a `serverless` graphQL implementation instead of `graph.cool`
- add `authentication` for the system
- add `authorisation` for data
- segragate between `admin` and `end-user` flows
- make better grid structure for listing
- add captcha to add product form
- add paypal/stripe for payment flow
- `subscriptions` from graphQL for realtime-ness
- eject `create-react-app`