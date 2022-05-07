import styled from '@emotion/styled';
import { Paper, Card, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

/* eslint-disable-next-line */
export interface AboutProps { }

const StyledAbout = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid pink;
`;

export function About(props: AboutProps) {

  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: {
      x: -100,
      y: 400,
      opacity: 0,
    },
    enter: {
      x: 0,
      y: 0,
      opacity: 1
    },
    leave: {
      x: 100,
      y: 400,
      opacity: 0
    },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <StyledAbout>
      <Button variant='outlined' onClick={() => {
        console.log('clicked');
        setIsVisible(!isVisible);
      }}>
        {isVisible ? 'Hide' : 'Show'}
      </Button>
      {/* {isVisible && <Card>Hello</Card>} */}
      {
        transition((style, item) => {
          return item && <animated.div style={style}>
            <Card>
              <h1>Hello</h1>
            </Card>
          </animated.div>;
        })
      }
    </StyledAbout>
  );
}

export default About;
