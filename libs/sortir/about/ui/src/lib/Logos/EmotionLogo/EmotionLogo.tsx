import styled from '@emotion/styled';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Tooltip, Zoom } from '@mui/material';

/* eslint-disable-next-line */
export interface EmotionLogoProps extends LogoImageProps { }

const StyledEmotionLogo = styled.div`
  color: pink;
`;

export function EmotionLogo(props: EmotionLogoProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.25 },
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.25 },
      }}
      style={{
        // border: '1px solid pink',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a href={props.href}>
        <Tooltip title="A library designed for writing css styles with JavaScript" TransitionComponent={Zoom} enterDelay={500} leaveDelay={200} arrow>
          <Image
            src={props.logoImage}
            alt={props.alt}
            height="6rem"
            style={{
              // border: '1px solid pink',
            }}
          />
        </Tooltip>
      </a>
    </motion.div>
  );
}

export default EmotionLogo;
