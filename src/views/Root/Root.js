import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
	<div>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<>
				<h1>Favnot</h1>
				<Button>Close / Save </Button>
				<Button secondary>Removed</Button>
			</>
		</ThemeProvider>
	</div>
);

export default Root;
