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
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }
    ${GlobalClasses}
        
    /* ANTD START */
    .ant-layout-header,
    .ant-layout-sider-trigger {
        background: #00B0D7;
        box-shadow: 0 2px 8px #f0f1f2;
        color: #fff;
    }

    .ant-layout-sider {
        background-color: #fafafa;
    }

    .site-layout-background {
        background: #fff;
    }

    .ant-layout {
        min-height: 100vh;
    }

    .ant-form-item-label {
        text-align: left;
    } 
    /* ANTD END */
    a {
        color: #333;
    }

    a:hover {
        color: #333;
    } 
    h2{ 
        font-weight: 400;
        font-size: 13px;
        line-height: 20px; 
        color: #5A6169;
    }

`;
export default GlobalStyles;
