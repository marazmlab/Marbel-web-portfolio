import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  canvas {
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100vw;
    max-height: 100vh;
    /* object-fit: cover; */
    display: block;
  }
`;

const SplineBackground = () => (
  <Background>
    <Spline scene="https://prod.spline.design/jXrCm3ExDNKn0o7N/scene.splinecode" />
  </Background>
);

export default SplineBackground;