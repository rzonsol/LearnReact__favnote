import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'theme/mainTheme';

import GlobalStyle from 'theme/GlobalStyle';

const MainTemplate = ({ children }) => (
	<div>
		<GlobalStyle />
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</div>
);

MainTemplate.propTypes = {
	children: PropTypes.element.isRequired,
};

export default MainTemplate;
