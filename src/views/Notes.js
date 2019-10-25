import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
	<>
		<GridTemplate pageType="notes">
			{notes.map(item => (
				<Card cardType="notes" title={item.title} created={item.created} content={item.content} key={item.id} id={item.id} />
			))}
		</GridTemplate>
	</>
);

Notes.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			created: PropTypes.string.isRequired,
		}),
	).isRequired,
};

Notes.defaultProps = {};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
