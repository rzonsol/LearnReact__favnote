import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';

import bulb from 'assets/icons/bulb.svg';
import logout from 'assets/icons/logout.svg';
import pen from 'assets/icons/pen.svg';
import twitter from 'assets/icons/twitter.svg';
import logo from 'assets/icons/logo.svg';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyleWrapper = styled.div`
	position: fixed;
	background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
	width: 15.3rem;
	top: 0;
	left: 0;
	height: 100vh;
	min-height: 45rem;
	box-shadow: 0px 3px 6px #00000029;
	display: grid;
	grid-template-rows: 1fr 5fr 1fr;
	text-align: center;
`;

const ButtonIconCenter = styled(ButtonIcon)`
	margin: auto;
`;

const LinkWrapperStyle = styled.div``;

const LogoStyle = styled.img`
	margin: 4rem auto 5rem;
	top: 5.6rem;
	width: 6.7rem;
	height: 6.7rem;
`;

const LogOutStyle = styled.div`
	position: absolute;
	bottom: 1rem;
	width: 100%;
	display: flex;
	align-content: center;
`;

const Sidebar = ({ pageContext }) => (
	<StyleWrapper activeColor={pageContext}>
		<LogoStyle src={logo} />
		<LinkWrapperStyle>
			<ButtonIconCenter as={NavLink} to="/notes" icon={pen} activeclass="active" />
			<ButtonIconCenter as={NavLink} to="/twitters" icon={twitter} activeclass="active" />
			<ButtonIconCenter as={NavLink} to="/articles" icon={bulb} activeclass="active" />
		</LinkWrapperStyle>
		<LogOutStyle>
			<ButtonIconCenter exact as={NavLink} to="/login" icon={logout} />
		</LogOutStyle>
	</StyleWrapper>
);

Sidebar.propTypes = {
	pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
	pageContext: 'notes',
};

export default withContext(Sidebar);
