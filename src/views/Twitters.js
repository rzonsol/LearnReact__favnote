import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
	{
		id: '0',
		title: 'Hello Roman',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
		created: '1 day',
		twitterName: 'hello_roman',
	},
	{
		id: '1',
		title: 'Redux guy',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
		created: '1 day',
		twitterName: 'dan_abramov',
	},
	{
		id: '2',
		title: 'React router stuff',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
		created: '5 days',
		twitterName: 'mjackson',
	},
	{
		id: '3',
		title: 'Super animacje!',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
		created: '10 days',
		twitterName: 'sarah_edo',
	},
];

const Twitters = () => (
	<>
		<GridTemplate pageType="twitters">
			{twitters.map(item => (
				<Card cardType="twitters" title={item.title} created={item.created} content={item.content} twitterName={item.twitterName} key={item.id} id={item.id} />
			))}
		</GridTemplate>
	</>
);

export default Twitters;
