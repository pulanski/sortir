import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { NavLink } from 'reactstrap';
import { Image } from '@chakra-ui/react';
import { LogoImageProps } from '../../LogoImageProps.interface';

/* eslint-disable-next-line */
export interface ReactSpringLogoProps extends LogoImageProps { }

const StyledReactSpringLogo = styled.div`
  color: pink;
`;

// "React Spring is a library for animating components using the React Hooks API.",

export function ReactSpringLogo(props: ReactSpringLogoProps) {
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
          alt="React Spring Logo"
          height="6rem"
          style={{
            margin: 'auto auto',
          }}
        />
      </NavLink>
    </motion.div>
  );
}

export default ReactSpringLogo;
