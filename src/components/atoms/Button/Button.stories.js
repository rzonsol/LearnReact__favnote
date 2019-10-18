import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Button from './Button';

export default {
	component: Button,
	title: 'Button',
};

const colorOption = () => {
	const label = 'Colors';
	const options = {
		Primary: 'hsl(49,100%,58%)',
		Secondary: 'hsl(196,83%,75%)',
		Tertiary: 'hsl(106,47%,64%)',
	};
	const defaultValue = 'hsl(49,100%,58%)';
	const groupId = 'GROUP-ID1';
	return select(label, options, defaultValue, groupId);
};

const primary = () => <Button color={colorOption}>Save / Exit</Button>;
const secondary = () => (
	<Button secondary color={colorOption}>
		Removed
	</Button>
);

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('Primary', primary)
	.add('Secondary', secondary);
