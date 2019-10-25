import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components//atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
	border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
	z-index: 999;
	position: fixed;
	display: flex;
	padding: 100px 90px;
	flex-direction: column;
	right: 0;
	top: 0;
	height: 100vh;
	width: 680px;
	background-color: white;
	box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
	transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
	transition: transform 0.7s ease-in-out;
`;

const StyledTextArea = styled(Input)`
	margin: 30px 0 100px;
	border-radius: 20px;
	height: 30vh;
`;

const StyledInput = styled(Input)`
	margin-top: 3rem;
`;

const NewItemBar = ({ pageContext, isVisible }) => (
	<StyledWrapper activeColor={pageContext} isVisible={isVisible}>
		<Heading big>Create new {pageContext}</Heading>
		<Input placeholder={pageContext === 'twitters' ? 'Account Name' : 'Title'} />
		{pageContext === 'articles' && <StyledInput placeholder="link" />}
		<StyledTextArea as="textarea" placeholder="content" />
		<Button pageType={pageContext}>Add Note</Button>
	</StyledWrapper>
);

NewItemBar.propTypes = {
	pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
	isVisible: PropTypes.bool,
	// addItem: PropTypes.func.isRequired,
	// handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
	pageContext: 'notes',
	isVisible: false,
};

export default withContext(NewItemBar);
