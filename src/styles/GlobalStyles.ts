import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './tokens'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: ${colors.bg};
    color: ${colors.text};
    font-family: ${fonts.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, p, ul, figure {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: ${colors.accent};
    color: ${colors.ink};
  }

  @keyframes revealUp {
    from { transform: translateY(20px); opacity: 0; }
    to   { transform: none; opacity: 1; }
  }

  @media (prefers-reduced-motion: no-preference) {
    [data-reveal] {
      animation: revealUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
  }
`
