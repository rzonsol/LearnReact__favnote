import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

const note = () => <Card />;
const twitter = () => <Card cardType="twitter" />;
const article = () => <Card cardType="article" />;

storiesOf('Card', module).add('Note', note);
storiesOf('Card', module).add('Twitter', twitter);
storiesOf('Card', module).add('Article', article);
