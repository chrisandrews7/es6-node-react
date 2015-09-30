import React from 'react';
import { RouteHandler } from 'react-router';

import './MainScreen.scss';

export default class MainScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <RouteHandler />
      </div>
    );
  }

}
