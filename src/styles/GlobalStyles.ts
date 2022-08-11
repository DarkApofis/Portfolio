import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
        
    *, *::before, *::after {
        box-sizing: inherit;
    }
        
    ul, li, h1, h2, h3, p, button {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    body {
        height: 100vh;
        margin: 0 auto;
        /* max-width: 500px; */
        width: 100%;
        overscroll-behavior: none;
        background-color: #262626;
        color: #D9D9D9;
    }

`