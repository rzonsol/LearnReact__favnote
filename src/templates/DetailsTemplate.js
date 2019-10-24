import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => <UserPageTemplate pageType={pageType}>{children}</UserPageTemplate>;

DetailsTemplate.propTypes = {
	children: PropTypes.element.isRequired,
	pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
	pageType: 'notes',
};

export default DetailsTemplate;
