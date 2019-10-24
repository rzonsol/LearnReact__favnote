/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import DetailsTemplate from 'templates/DetailsTemplate';
import routes from 'routes';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyleWrapper = styled.div`
	width: 55rem;
	margin-top: 12rem;
	padding-left: 14rem;
	overflow: hidden;
	min-height: 38rem;
	position: relative;
`;

const ButtonsWrapper = styled.div`
	padding: 3rem 0;
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-gap: 1rem;
`;

const RemoveButton = styled.button`
	border: none;
	text-align: left;
	text-decoration: underline;
	letter-spacing: 0;
	background-color: transparent;
	cursor: pointer;
	width: 10rem;
`;

const StyledHeading = styled(Heading)`
	margin-bottom: 0;
`;

const DateInfo = styled(Paragraph)`
	margin: 0 0 4rem;
	font-weight: ${({ theme }) => theme.bold};
	font-size: ${({ theme }) => theme.fontSize.xs};
	text-transform: uppercase;
`;

const LinkTo = styled.a`
	text-align: center;
	text-decoration: underline;
	text-transform: uppercase;
	letter-spacing: 0;
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.bold};
`;

const StyledAvatar = styled.img`
	width: 10rem;
	height: 10rem;
	border: none;
	border-radius: 5rem;
	position: absolute;
	top: 0rem;
	right: 0rem;
`;

class DetailsPage extends Component {
	state = {
		pageType: 'notes',
	};

	componentDidMount() {
		const { path } = this.props.match;
		switch (path) {
			case routes.article:
				this.setState({
					pageType: 'articles',
				});
				break;
			case routes.note:
				this.setState({
					pageType: 'notes',
				});
				break;
			case routes.twitter:
				this.setState({
					pageType: 'twitters',
				});
				break;

			default:
				this.setState({
					pageType: 'notes',
				});
		}
	}

	render() {
		const { pageType } = this.state;
		const nameSingle = pageType.substring(0, pageType.length - 1);
		const remove = `remove ${nameSingle}`;

		return (
			<>
				<DetailsTemplate pageType={pageType}>
					<StyleWrapper>
						<StyledHeading big>My best note</StyledHeading>
						<DateInfo>Created - 25/03/2019</DateInfo>
						{pageType === 'twitters' && <StyledAvatar src="https://avatars.io/twitter/rzonsol" />}
						<Paragraph>
							Do mollit irure ad mollit non occaecat anim fugiat eiusmod excepteur deserunt incididunt eu. Veniam aute id enim anim commodo labore exercitation
							magna do duis ex consequat commodo ex. Id minim ex enim dolor consequat consequat adipisicing nostrud est. Sint cillum magna veniam sint ullamco
							irure aliquip sint consequat consectetur
						</Paragraph>
						{pageType !== 'notes' && <LinkTo>Open this {nameSingle}</LinkTo>}
						<ButtonsWrapper>
							<Button pageType={pageType}>Close / Save</Button>
							<RemoveButton>{remove}</RemoveButton>
						</ButtonsWrapper>
					</StyleWrapper>
				</DetailsTemplate>
			</>
		);
	}
}

export default DetailsPage;
