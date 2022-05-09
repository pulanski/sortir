import styled from '@emotion/styled';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Tooltip, Zoom } from '@mui/material';

/* eslint-disable-next-line */
export interface RiotGamesAPILogoProps extends LogoImageProps { }

const StyledRiotGamesAPILogo = styled.div`
  color: pink;
`;

export function RiotGamesAPILogo(props: RiotGamesAPILogoProps) {
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
        <Tooltip title="Provides access to League game data in a secure and reliable way" TransitionComponent={Zoom} enterDelay={500} leaveDelay={200} arrow>
          <Image
            src={props.logoImage}
            alt={props.alt}
            height="6rem"
            style={{
              marginTop: '0.25rem',
            }}
          />
        </Tooltip>
      </a>
    </motion.div>
  );
}

export default RiotGamesAPILogo;
