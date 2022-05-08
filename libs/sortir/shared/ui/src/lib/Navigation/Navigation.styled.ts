import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { AiFillYoutube } from 'react-icons/ai';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { NavbarBrand, NavItem } from 'reactstrap';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const StyledNavigation = styled(Paper)``;

export const StyledNavbarBrand = styled(NavbarBrand)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTypography = styled(Typography)`
  margin-left: 0.5rem;
`;

export const StyledNavItem = styled(NavItem)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFaGithub = styled(FaGithub)`
  color: white;
  &:hover {
    color: #aba7a7;
  }
`;

export const StyledFaDiscord = styled(FaDiscord)`
  color: #5c68f5;
  &:hover {
    color: #5c69f59f;
  }
`;

export const StyledAiFillYoutube = styled(AiFillYoutube)`
  color: #ff0000;
  &:hover {
    color: #ff00009f;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 50% 20% / 10% 40%;
  margin-right: 0.5rem;
`;

export const StyledMotionDiv = styled(motion.div)`
  padding: 0 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
