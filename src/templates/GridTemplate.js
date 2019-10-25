import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';

const StyleGrid = styled.div`
	display: grid;
	grid-gap: 8.5rem;
	grid-template-columns: repeat(3, 1fr);
`;

const StyledWrapper = styled.div`
	padding: 2.5rem 15rem 2.5rem 7rem;
`;

const StyledPageHeader = styled.div`
	padding-bottom: 2.5rem;
`;

const StyledHeading = styled(Heading)`
	margin: 2.5rem 0 0 0;
	::first-letter {
		text-transform: uppercase;
	}
`;

const StyledParagraph = styled(Paragraph)`
	margin: 0;
	font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageContext }) => (
	<UserPageTemplate>
		<StyledWrapper>
			<StyledPageHeader>
				<Input search placeholder="Search" />
				<StyledHeading big as="h1">
					{pageContext}
				</StyledHeading>
				<StyledParagraph>6 {pageContext}</StyledParagraph>
			</StyledPageHeader>
			<StyleGrid>{children}</StyleGrid>
		</StyledWrapper>
	</UserPageTemplate>
);

GridTemplate.propTypes = {
	children: PropTypes.arrayOf(PropTypes.object).isRequired,
	pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
	pageContext: 'notes',
};

export default withContext(GridTemplate);
