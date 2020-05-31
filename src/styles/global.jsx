import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ::-webkit-scrollbar {
    width: 0;
    background-color: #282a36;
}
 
::-webkit-scrollbar-track {

    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
}
`;
