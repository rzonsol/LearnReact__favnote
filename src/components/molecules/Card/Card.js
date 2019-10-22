import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Headings from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyleWrapper = styled.div`
	box-shadow: 0 1rem 3rem -1rem hsla(0, 0%, 0%, 0.1);
	border-radius: 1rem;
	overflow: hidden;
	min-height: 38rem;
	position: relative;
	display: grid;
	grid-template-rows: 0.25fr 1fr;
`;

const StyleInnerWrapper = styled.div`
	position: relative;
	padding: 1.7rem 3rem;
	background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

	:first-of-type {
		z-index: 999;
	}

	${({ flex }) =>
		flex &&
		css`
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		`}
`;

const DateInfo = styled(Paragraph)`
	margin: 0 0 0.5rem;
	font-weight: ${({ theme }) => theme.bold};
	font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Headings)`
	margin: 0.5rem 0 0;
`;

const StyledLinkButton = styled.a`
	display: block;
	width: 4.7rem;
	height: 4.7rem;
	border-radius: 5rem;
	background: white url(${LinkIcon}) no-repeat;
	background-size: 60%;
	background-position: 50%;
	position: absolute;
	right: 2.5rem;
	top: 50%;
	transform: translateY(-50%);
`;

const StyledAvatar = styled.img`
	width: 8.6rem;
	height: 8.6rem;
	border: 0.5rem solid ${({ theme }) => theme.twitter};
	border-radius: 5rem;
	position: absolute;
	top: 2.5rem;
	right: 2.5rem;
`;

const Card = ({ articleUrl, cardType, content, created, title, twitterName }) => (
	<StyleWrapper>
		<StyleInnerWrapper activeColor={cardType}>
			<StyledHeading>{title}</StyledHeading>
			<DateInfo>{created}</DateInfo>
			{cardType === 'twitter' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />}
			{cardType === 'article' && <StyledLinkButton href={articleUrl} />}
		</StyleInnerWrapper>
		<StyleInnerWrapper flex>
			<Paragraph>{content}</Paragraph>
			<Button secondary>Remove</Button>
		</StyleInnerWrapper>
	</StyleWrapper>
);

Card.propTypes = {
	cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
	title: PropTypes.string.isRequired,
	created: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	twitterName: PropTypes.string,
	articleUrl: PropTypes.string,
};

Card.defaultProps = {
	cardType: 'note',
	twitterName: null,
	articleUrl: null,
};

export default Card;
