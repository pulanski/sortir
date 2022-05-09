import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { HeroTitle, StyledMotionDiv, StyledNavbarBrand } from './Logo.styled';
import { Image } from '@chakra-ui/react';

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
                  <Image
                    src={logoProps.logo} boxSize='6rem' alt='Sortir logo'
                    style={{
                      borderRadius: '50% 20% / 10% 40%',
                      marginRight: '0.5rem',
                    }}
                  />
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
