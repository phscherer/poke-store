import React from 'react';
import { Route } from "react-router-dom";
import App from '../pages/app';

export default () => (
  <React.Fragment>
    <Route exact path="/" component={App} />
  </React.Fragment>
);