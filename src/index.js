import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { ROOT_API_GRAPHQL } from './utils/constants';
import './stylesheets/index.css';

const store = configureStore();
const client = new ApolloClient({
  uri: ROOT_API_GRAPHQL,
});

/* eslint no-undef: 0 */
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <AppContainer>
        <App />
      </AppContainer>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
