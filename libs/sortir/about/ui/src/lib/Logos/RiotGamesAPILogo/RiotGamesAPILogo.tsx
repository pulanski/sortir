import styled from '@emotion/styled';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavLink } from 'reactstrap';

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
    >
      <NavLink href={props.href}>
        <Image
          src={props.logoImage}
          alt={props.alt}
          height="6rem"
          style={{
            marginLeft: '-2rem',
          }}
        />
      </NavLink>
    </motion.div>
  );
}

export default RiotGamesAPILogo;
