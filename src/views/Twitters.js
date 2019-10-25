import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
	<GridTemplate pageType="twitters">
		{twitters.map(item => (
			<Card cardType="twitters" title={item.title} created={item.created} content={item.content} twitterName={item.twitterName} key={item.id} id={item.id} />
		))}
	</GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters });

Twitters.propTypes = {
	twitters: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			created: PropTypes.string.isRequired,
			twitterName: PropTypes.string.isRequired,
		}),
	).isRequired,
};

Twitters.defaultProps = {};

export default connect(mapStateToProps)(Twitters);
