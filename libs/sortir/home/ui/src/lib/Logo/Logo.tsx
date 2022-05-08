import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { HeroTitle, StyledImage, StyledMotionDiv, StyledNavbarBrand } from './Logo.styled';

export interface LogoProps {
  logo: string;
}

export function Logo(logoProps: LogoProps) {
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
    setIsVisible(true);
  }, []);

  return (
    <>
      {
        transition((style, item) => {
          return item &&
            <animated.div style={style}>
              <StyledNavbarBrand href="/">
                <StyledMotionDiv
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                >
                  <StyledImage src={logoProps.logo} boxSize='6rem' alt='Sortir logo' />
                  <HeroTitle variant='h1'>
                    sortir
                  </HeroTitle>
                </StyledMotionDiv>
              </StyledNavbarBrand>
            </animated.div>
            ;
        })
      }
    </>
  );
}


export default Logo;
