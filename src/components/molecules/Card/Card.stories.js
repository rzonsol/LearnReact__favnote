import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

const note = () => <Card cardType="notes" />;
const twitter = () => <Card cardType="twitters" />;
const article = () => <Card cardType="articles" />;

storiesOf('Card', module).add('Note', note);
storiesOf('Card', module).add('Twitter', twitter);
storiesOf('Card', module).add('Article', article);
