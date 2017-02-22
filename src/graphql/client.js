import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri         : 'https://api.github.com/graphql',
  credentials : 'same-origin',
});

const authorizationHeader = {
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
      req.options.headers['x-apikey'] = '58ad02f51336925a2571b148';
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
