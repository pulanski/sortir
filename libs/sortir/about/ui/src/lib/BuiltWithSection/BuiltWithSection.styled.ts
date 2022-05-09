import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  cursor: grabbing;
`;

export const StyledTypography = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
  text-align: center;
`;

export const StyledPaper = styled(Paper)`
  padding: 10vh 25vw;
`;

export const StyledMotionDiv = styled(motion.div)`
  cursor: pointer;
`;
