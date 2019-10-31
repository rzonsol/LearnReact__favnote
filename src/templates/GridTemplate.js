import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plus from 'assets/icons/plus.svg';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

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

const StyledButtonIcon = styled(ButtonIcon)`
	position: fixed;
	z-index: 9999;
	background-size: 35%;
	bottom: 4rem;
	right: 4rem;
	border-radius: 5rem;
	background-color: ${({ activeColor, theme }) => theme[activeColor]};
`;

class GridTemplate extends Component {
	state = {
		isNewItemBarVisible: false,
	};

	handleNewItemBarToggle = () => {
		const { isNewItemBarVisible } = this.state;
		console.log(isNewItemBarVisible);

		this.setState({
			isNewItemBarVisible: !isNewItemBarVisible,
		});
	};

	render() {
		const { children, pageContext } = this.props;
		const { isNewItemBarVisible } = this.state;
		return (
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
					<StyledButtonIcon activeColor={pageContext} icon={plus} onClick={this.handleNewItemBarToggle} />
					<NewItemBar isVisible={isNewItemBarVisible} newItemBarToggle={this.handleNewItemBarToggle} />
				</StyledWrapper>
			</UserPageTemplate>
		);
	}
}

GridTemplate.propTypes = {
	children: PropTypes.arrayOf(PropTypes.object).isRequired,
	pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
	pageContext: 'notes',
};

export default withContext(GridTemplate);
