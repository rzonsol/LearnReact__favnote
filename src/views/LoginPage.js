import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authenticate as authenticationAction } from 'actions';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ authenticate, userID }) => {
	if (userID) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<h1>{userID}</h1>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={({ username, password }) => {
					authenticate(username, password);
				}}
			>
				{() => (
					<Form>
						<Field name="username" type="text" />
						<Field name="password" type="password" />
						<button type="submit">Sing in</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	authenticate: (username, password) => dispatch(authenticationAction(username, password)),
});

const mapStateToProps = ({ userID = null }) => ({ userID });

LoginPage.propTypes = {
	authenticate: PropTypes.func.isRequired,
	userID: PropTypes.string,
};

LoginPage.defaultProps = {
	userID: null,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginPage);
