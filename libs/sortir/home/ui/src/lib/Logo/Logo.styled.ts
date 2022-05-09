import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { NavbarBrand } from 'reactstrap';
import { Image } from '@chakra-ui/react';
import { Typography } from '@mui/material';

export const StyledNavbarBrand = styled(NavbarBrand)`
  padding: 0 2vw;
  margin: 0 35vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMotionDiv = styled(motion.div)`
  padding: 0 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const StyledImage = styled(Image)`
//   border-radius: 50% 20% / 10% 40%;
//   margin-right: 0.5rem;
// `;

export const HeroTitle = styled(Typography)`
  margin-left: 0.5rem;
  font-weight: 700;
`;
