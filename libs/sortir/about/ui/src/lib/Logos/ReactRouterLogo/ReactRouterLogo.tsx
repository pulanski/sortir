import styled from '@emotion/styled';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavLink } from 'reactstrap';

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
    >
      <NavLink href={props.href}>
        <Image
          src={props.logoImage}
          alt={props.alt}
          height="5rem"
          width="8rem"
          style={{
            margin: 'auto auto',
          }}
        />
      </NavLink>
    </motion.div>
  );
}

export default ReactRouterLogo;
