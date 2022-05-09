import styled from '@emotion/styled';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Tooltip, Zoom } from '@mui/material';

/* eslint-disable-next-line */
export interface ReactRouterLogoProps extends LogoImageProps { }

const StyledReactRouterLogo = styled.div`
  color: pink;
`;

export function ReactRouterLogo(props: ReactRouterLogoProps) {
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
        <Tooltip title="A library for client-side routing in React applications" TransitionComponent={Zoom} enterDelay={500} leaveDelay={200} arrow>
          <Image
            src={props.logoImage}
            alt={props.alt}
            height="5rem"
            width="8rem"
            style={{
              marginTop: '0.5rem',
            }}
          />
        </Tooltip>
      </a>
    </motion.div>
  );
}

export default ReactRouterLogo;
