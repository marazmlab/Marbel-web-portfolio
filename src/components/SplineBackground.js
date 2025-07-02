import React, { useRef, useEffect} from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const Background = styled.div`
  /* position: fixed; */
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
`;

const SplineBackground = ({ theme }) => {
    const lightScene = 'https://prod.spline.design/aGfBHHpiVjOKkdaJ/scene.splinecode';
    const darkScene =  'https://prod.spline.design/jXrCm3ExDNKn0o7N/scene.splinecode';

    return (
        <Background>
            <Spline scene={theme == 'light' ? lightScene : darkScene} />
        </Background>
    )
};

export default SplineBackground;