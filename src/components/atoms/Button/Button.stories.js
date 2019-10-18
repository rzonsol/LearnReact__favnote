import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Button from './Button';

export default {
	component: Button,
	title: 'Button',
};

const primary = () => <Button>Save / Exit</Button>;
const secondary = () => <Button secondary>Removed</Button>;

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('Primary', primary)
	.add('Secondary', secondary);
