import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Image } from '@chakra-ui/react';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Tooltip, Zoom } from '@mui/material';

/* eslint-disable-next-line */
export interface ReactSpringLogoProps extends LogoImageProps { }

const StyledReactSpringLogo = styled.div`
  color: pink;
`;


export function ReactSpringLogo(props: ReactSpringLogoProps) {
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
        <Tooltip title="Simple spring animation primitives for bringing React components to life" TransitionComponent={Zoom} enterDelay={500} leaveDelay={200} arrow>
          <Image
            src={props.logoImage}
            alt="React Spring Logo"
            height="6rem"
            style={{
              marginTop: '0.3rem',
            }}
          />
        </Tooltip>
      </a>
    </motion.div>
  );
}

export default ReactSpringLogo;
