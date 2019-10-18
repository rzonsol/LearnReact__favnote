import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
	.add('Big', () => <Heading big>Hello Roman</Heading>)
	.add('Normal', () => <Heading>Hello Roman</Heading>);
