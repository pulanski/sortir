import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { StyledSpanSubtitle, StyledHeroSubtitle } from './HeroSubtitle.styled';

/* eslint-disable-next-line */
export interface HeroSubtitleProps { }

export function HeroSubtitle(props: HeroSubtitleProps) {

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
              <StyledHeroSubtitle variant='body1'>
                A free, open-source, community-driven platform for the <StyledSpanSubtitle> modern League of Legends player.</StyledSpanSubtitle>
              </StyledHeroSubtitle>
            </animated.div>;
        })
      }
    </>
  );
}

export default HeroSubtitle;
