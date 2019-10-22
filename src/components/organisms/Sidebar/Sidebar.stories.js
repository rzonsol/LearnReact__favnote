import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Sidebar from './Sidebar';

const normal = () => <Sidebar />;

storiesOf('Organisms/Sidebar', module)
	.addDecorator(StoryRouter())
	.add('Normal', normal);
