import React from 'react';

import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
	<div>
		<GlobalStyle />
		<h1>Favnot</h1>
		<Button>Close / Save </Button>
		<Button secondary>Removed</Button>
	</div>
);

export default Root;
