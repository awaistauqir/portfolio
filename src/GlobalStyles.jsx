import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
   
  }
 a, li, span,p{
    font-family: 'Fira Code' , sans-serif;
 }
 h1,h2,h3,h4,h5,h6{
    font-family: sans-serif;
    font-family: 'Poppins', sans-serif;
 }
  
  body {
	min-height: 100vh;
	background-color: #0a192f;
}
a {
	text-decoration: none;
}
li {
	list-style: none;
}

  ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: lightblue;
    border-radius: 25px;
  }
`;

export default GlobalStyles;
