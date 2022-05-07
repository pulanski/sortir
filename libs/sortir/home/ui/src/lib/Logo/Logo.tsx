import styled from '@emotion/styled';
import { NavbarBrand } from 'reactstrap';
import { Image } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';

export interface LogoProps {
  logo: string;
}

const StyledLogo = styled.div`
  color: pink;
`;

const StyledNavbarBrand = styled(NavbarBrand)`
  padding: 0 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  border-radius: 50% 20% / 10% 40%;
  margin-right: 0.5rem;
`;

const HeroTitle = styled(Typography)`
  margin-left: 0.5rem;
  font-weight: 700;
`;

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
                <StyledImage src={logoProps.logo} boxSize='6rem' alt='Sortir logo' />
                <HeroTitle variant='h1'>
                  sortir
                </HeroTitle>
              </StyledNavbarBrand>
            </animated.div>;
        })
      }
    </>
  );
}


export default Logo;
