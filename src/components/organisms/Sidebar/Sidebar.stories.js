import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Sidebar from './Sidebar';

const notes = () => <Sidebar pageType="notes" />;
const twitters = () => <Sidebar pageType="twitters" />;
const articles = () => <Sidebar pageType="articles" />;

storiesOf('Organisms/Sidebar', module)
	.addDecorator(StoryRouter())
	.add('Notes', notes)
	.add('Articles', articles)
	.add('Twitters', twitters);
