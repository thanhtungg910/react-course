import { createGlobalStyle } from 'styled-components';
import { GlobalClasses } from './GlobalClasses';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    * {
      margin: 0;
      padding: 0;
    }
    
    html,
    body {
      height: 100%;
    }
    body {
      line-height: 1.5;
    }
    
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
      outline: none;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    ${GlobalClasses}

`;
export default GlobalStyles;
