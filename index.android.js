import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import RouterApp from './src/containers/RouterApp';
import configureStore from './src/store/configureStore';
import apolloClient from './src/graphql/client';
import { ApolloProvider } from 'react-apollo';

const store = configureStore();

/**
 * rnProfile
 */
class rnProfile extends Component {
  render () {
    return (
      <ApolloProvider store={store} client={apolloClient}>
        <RouterApp />
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('rnProfile', () => rnProfile);

