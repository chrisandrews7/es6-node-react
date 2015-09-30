import React from 'react';
import Router from 'react-router';

import Routes from './Routes';

Router.run(Routes, function(Handler) {
  React.render(<Handler/>, document.body);
});
