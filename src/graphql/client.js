import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri         : 'https://api.github.com/graphql',
  credentials : 'same-origin',
});

const authorizationHeader = {
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
      req.options.headers.authorization = 'Bearer [token]';
      next();
    }
    next();
  },
};

networkInterface.use([authorizationHeader]);

const apolloClient = new ApolloClient({
  networkInterface,
});

export default apolloClient;
