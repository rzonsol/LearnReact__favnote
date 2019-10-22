import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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

const UserPageTemplate = ({ children, pageType }) => (
	<>
		<Sidebar pageType={pageType} />
		<StyledWrapper>
			<StyledPageHeader>
				<Input search placeholder="Search" />
				<StyledHeading big as="h1">
					{pageType}s
				</StyledHeading>
				<StyledParagraph>6 {pageType}s</StyledParagraph>
			</StyledPageHeader>
			<StyleGrid>{children}</StyleGrid>
		</StyledWrapper>
	</>
);

UserPageTemplate.propTypes = {
	children: PropTypes.element.isRequired,
	pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
	pageType: 'note',
};

export default UserPageTemplate;
