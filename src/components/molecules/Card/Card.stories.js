import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

const normal = () => <Card />;

storiesOf('Card', module).add('Normal', normal);
