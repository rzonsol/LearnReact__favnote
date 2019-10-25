import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'theme/mainTheme';
import { withRouter } from 'react-router';

import GlobalStyle from 'theme/GlobalStyle';
import PageContext from 'context';

class MainTemplate extends Component {
	state = {
		pageType: 'notes',
	};

	componentDidMount() {
		this.setCurrentPage();
	}

	componentDidUpdate(prevProps, prevState) {
		this.setCurrentPage(prevState);
	}

	setCurrentPage = (prevState = '') => {
		const pageTypes = ['articles', 'twitters', 'notes'];
		const {
			location: { pathname },
		} = this.props;
		const [currentPage] = pageTypes.filter(page => pathname.includes(page));
		if (prevState.pageType !== currentPage) {
			this.setState({
				pageType: currentPage,
			});
		}
	};

	render() {
		const { children } = this.props;
		const { pageType } = this.state;
		return (
			<div>
				<PageContext.Provider value={pageType}>
					<GlobalStyle />
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</PageContext.Provider>
			</div>
		);
	}
}

MainTemplate.propTypes = {
	children: PropTypes.element.isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
	}).isRequired,
};

export default withRouter(MainTemplate);
