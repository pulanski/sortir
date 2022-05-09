import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';
import { Tooltip, Zoom } from '@mui/material';

/* eslint-disable-next-line */
export interface ReactLogoProps extends LogoImageProps { }

const StyledReactLogo = styled.div`
  color: pink;
`;

export function ReactLogo(props: ReactLogoProps) {
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
        <Tooltip title="A JavaScript library for building user interfaces" TransitionComponent={Zoom} enterDelay={500} leaveDelay={200} arrow>
          <Image
            src={props.logoImage}
            alt={props.alt}
            width="175px"
            height="6rem"
            style={{
              // marginLeft: '-2rem',
              // border: '1px solid pink',
            }}
          />
        </Tooltip>
      </a>
    </motion.div>
  );
}

export default ReactLogo;
