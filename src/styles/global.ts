import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import ${ ({ theme }) => theme.typography.fonts[0].url };
  @import ${ ({ theme }) => theme.typography.fonts[1].url };
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::-webkit-scrollbar {
      width: 10px;
      background: transparent;
    }
  }

  a {
    text-decoration: none;
  }

  body, #root {
    min-height: 100vh;
  }

  h2 {
    margin: 0;
  }

  label {
    cursor: pointer;
    margin-left: 5px;
  }

  ul {
    list-style: none;
  }
`