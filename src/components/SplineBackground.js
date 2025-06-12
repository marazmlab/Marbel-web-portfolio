import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const Background = styled.div`
  /* position: fixed; */
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
`;

const SplineBackground = () => (
  <Background>
    <Spline scene="https://prod.spline.design/jXrCm3ExDNKn0o7N/scene.splinecode" />
  </Background>
);

export default SplineBackground;