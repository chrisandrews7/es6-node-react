import React from 'react';
import { Route, RouteHandler, DefaultRoute } from 'react-router';

import MainScreen from 'components/screens/main/MainScreen';
import CarsScreen from 'components/screens/cars/CarsScreen';

const routes = (
  <Route handler={RouteHandler}>
		<Route handler={MainScreen}>
			<DefaultRoute name="cars" handler={CarsScreen} />
		</Route>
	</Route>
);

export default routes;
