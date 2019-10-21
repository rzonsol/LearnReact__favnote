import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import bulb from 'assets/icons/bulb.svg';
import logout from 'assets/icons/logout.svg';
import pen from 'assets/icons/pen.svg';
import plus from 'assets/icons/plus.svg';
import twitter from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.note};
	width: 50rem;
	height: 50rem;
`;

storiesOf('ButtonIcon', module)
	.addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
	.add('Bulb - active', () => <ButtonIcon icon={bulb} active />)
	.add('Logout', () => <ButtonIcon icon={logout} />)
	.add('Pen', () => <ButtonIcon icon={pen} />)
	.add('Plus', () => <ButtonIcon icon={plus} />)
	.add('Twitter', () => <ButtonIcon icon={twitter} />);
