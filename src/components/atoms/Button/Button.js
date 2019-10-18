import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: ${({ theme }) => theme.primary};
	border: none;
	border-radius: 50px;
	font-family: 'Montserrat';
	font-size: 16px;
	font-weight: 600;
	height: 48px;
	text-transform: uppercase;
	width: ${({ width }) => width || '220px'};

	${({ secondary }) =>
		secondary &&
		css`
			background-color: ${({ theme }) => theme.grey200};
			font-size: 10px;
			width: 105px;
		`}
`;

export default Button;
