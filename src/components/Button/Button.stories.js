import React from 'react';
import Button from './Button';

export default {
	component: Button,
	title: 'Button',
};

export const primary = () => <Button>Save / Exit</Button>;

export const secondary = () => <Button secondary>Removed</Button>;
