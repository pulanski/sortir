import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { StyledSpanSubtitle, StyledHeroDescription } from './HeroDescription.styled';

/* eslint-disable-next-line */
export interface HeroDescriptionProps { }

export function HeroDescription(props: HeroDescriptionProps) {
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
    }, 300);
  }, []);

  return (
    <>
      {
        transition((style, item) => {
          return item &&
            <animated.div style={style}>
              <StyledHeroDescription variant='body1'>
                A free, open-source, community-driven platform for the <StyledSpanSubtitle> modern League of Legends player.</StyledSpanSubtitle>
              </StyledHeroDescription>
            </animated.div>;
        })
      }
    </>
  );
}

export default HeroDescription;
