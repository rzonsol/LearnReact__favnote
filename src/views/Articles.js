import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
	<>
		<GridTemplate pageType="articles">
			{articles.map(item => (
				<Card cardType="articles" title={item.title} created={item.created} content={item.content} articleUrl={item.articleUrl} key={item.id} id={item.id} />
			))}
		</GridTemplate>
	</>
);

const mapStateToProps = ({ articles }) => ({ articles });

Articles.propTypes = {
	articles: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			created: PropTypes.string.isRequired,
		}),
	).isRequired,
};

Articles.defaultProps = {};

export default connect(mapStateToProps)(Articles);
