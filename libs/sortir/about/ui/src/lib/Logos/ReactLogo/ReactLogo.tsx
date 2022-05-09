import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { NavLink } from 'reactstrap';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';

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
    >
      <NavLink href={props.href}>
        <Image
          src={props.logoImage}
          alt={props.alt}
          width="175px"
          height="6rem"
          style={{
            margin: 'auto auto',
          }}
        />
      </NavLink>
    </motion.div>
  );
}

export default ReactLogo;
