/**
 * Style base device is mobile
 */

import { createGlobalStyle } from 'styled-components';
import { media } from './helper';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  h1 {
    font-weight: 600;
    font-size: ${p => p.theme.fontSize.l};
    letter-spacing: inherit;
  }

  p {
    font-weight: 300;
    font-size: 1.1em;
  }

  ol, ul {
    list-style: none;
  }

  ${media('desktop')} {
    h1 {
      letter-spacing: 2px;
    }

    p {
      font-size: 1em;
    }
  }
`;
