import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface(
  'https://api.github.com/graphql', {
    credentials : 'same-origin',
  });

const authorizationHeader = {
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
      req.options.headers.authorization = 'Bearer 897e20fc64867471f0a95f199291d418f4e8136d';
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
