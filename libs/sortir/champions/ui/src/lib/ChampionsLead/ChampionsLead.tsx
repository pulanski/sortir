import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';

/* eslint-disable-next-line */
export interface ChampionsLeadProps { }

export const StyledChampionsLead = styled(Typography)`
  padding-left: 10vw;
  padding-right: 10vw;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
`;

export function ChampionsLead(props: ChampionsLeadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: {
      x: 0,
      y: -400,
      opacity: 0,
    },
    enter: {
      x: 0,
      y: 0,
      opacity: 1
    },
    leave: {
      x: 400,
      y: 100,
      opacity: 0
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <>
      {
        transition((style, item) => {
          return item &&
            <animated.div style={style}>
              <StyledChampionsLead variant='h1'>
                Champions
              </StyledChampionsLead>
            </animated.div>;
        })
      }
    </>
  );
}

export default ChampionsLead;
