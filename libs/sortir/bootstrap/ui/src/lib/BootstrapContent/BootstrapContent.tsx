import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

/* eslint-disable-next-line */
export interface BootstrapContentProps { }

const StyledBootstrapContent = styled.div`
  color: pink;
  /* box-shadow: 0px 10px 50px #abb7e9; */
`;

export function BootstrapContent(bootstrapContentProps: BootstrapContentProps) {

  const [loaded, setLoaded] = useState(false);
  const width = 0;

  const bootstrapContentAnimation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    // 'scale(0.5)',
    // `translate3d(${width}px, 0, 0)`
    to: {
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(100%)',
    },
    config: {
      duration: 1000,
    },
  });

  // useEffect(() => {
  //   useSpring({


  return (
    <animated.div>
      <StyledBootstrapContent>
        <h1>Welcome to BootstrapContent!</h1>
      </StyledBootstrapContent>
    </animated.div>
  );
}

export default BootstrapContent;
