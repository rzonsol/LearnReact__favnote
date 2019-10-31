import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';

import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components//atoms/Button/Button';
import withContext from 'hoc/withContext';
import { addItem as addItemAction } from 'actions';

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

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, newItemBarToggle }) => (
	<StyledWrapper activeColor={pageContext} isVisible={isVisible}>
		<Heading big>Create new {pageContext}</Heading>
		<Formik
			initialValues={{
				title: '',
				content: '',
				articleUrl: '',
				twitterName: '',
				created: '',
			}}
			onSubmit={values => {
				addItem(pageContext, values);
				newItemBarToggle();
			}}
		>
			{({ values, handleChange, handleBlur }) => (
				<StyledForm>
					<StyledInput placeholder="Title" type="text" name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
					{pageContext === 'twitters' && (
						<StyledInput
							placeholder={pageContext === 'twitters' ? 'Account Name' : 'Title'}
							type="text"
							name="twitterName"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.twitterName}
						/>
					)}
					{pageContext === 'articles' && (
						<StyledInput placeholder="link" name="articleUrl" onChange={handleChange} onBlur={handleBlur} value={values.articleUrl} />
					)}
					<StyledTextArea as="textarea" placeholder="content" name="content" onChange={handleChange} onBlur={handleBlur} value={values.content} />
					<Button type="submit">Add {pageContext}</Button>
				</StyledForm>
			)}
		</Formik>
	</StyledWrapper>
);

NewItemBar.propTypes = {
	pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
	isVisible: PropTypes.bool,
	addItem: PropTypes.func.isRequired,
	newItemBarToggle: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
	pageContext: 'notes',
	isVisible: false,
};

const mapDispatchToProps = dispatch => ({
	addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
	null,
	mapDispatchToProps,
)(withContext(NewItemBar));
