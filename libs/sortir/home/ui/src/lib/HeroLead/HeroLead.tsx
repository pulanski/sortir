import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { StyledHeroLead, StyledSpanTitle } from './HeroLead.styled';

/* eslint-disable-next-line */
export interface HeroLeadProps { }

export function HeroLead(props: HeroLeadProps) {

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
              <StyledHeroLead variant='h2'>
                A <StyledSpanTitle>comprehensive suite of tools</StyledSpanTitle> designed to enhance your League of Legends experience.
              </StyledHeroLead>
            </animated.div>;
        })
      }
    </>
  );
}

export default HeroLead;
