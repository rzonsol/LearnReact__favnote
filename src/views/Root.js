import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import DetailsPage from 'views/DetailsPage';
import routes from 'routes';

const Root = () => (
	<MainTemplate>
		<BrowserRouter>
			<Switch>
				<Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
				<Route exact path={routes.notes} component={Notes} />
				<Route path={routes.note} component={DetailsPage} />
				<Route exact path={routes.articles} component={Articles} />
				<Route path={routes.article} component={DetailsPage} />
				<Route exact path={routes.twitters} component={Twitters} />
				<Route path={routes.twitter} component={DetailsPage} />
			</Switch>
		</BrowserRouter>
	</MainTemplate>
);

export default Root;
