import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { PerlinNoise } from './PerlinNoise.tsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <PerlinNoise />
  </StrictMode>,
);
