import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap&subset=latin-ext');

	*, *::before, *::after {
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;

		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-family: "Montserrat", sans-serif;
		font-size: 1.6rem;
		padding-left: 15.3rem;
	}
`;

export default GlobalStyle;
