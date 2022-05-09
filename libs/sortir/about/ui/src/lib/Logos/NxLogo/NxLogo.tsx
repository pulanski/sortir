import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { NavLink } from 'reactstrap';
import { Image } from '@chakra-ui/react';
import { LogoImageProps } from '../../LogoImageProps.interface';

/* eslint-disable-next-line */
export interface NxLogoProps extends LogoImageProps { }

const StyledNxLogo = styled.div`
  color: pink;
`;

export function NxLogo(props: NxLogoProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.25 },
      }}
    >
      <NavLink href={props.href}>
        {/* <Tooltip label="Monorepo tooling and build system" color='blue'> */}
        <Image
          src={props.logoImage}
          alt={props.alt}
          height="5rem"
          style={{
            margin: "auto auto",
          }}
        />
        {/* </Tooltip> */}
      </NavLink>
    </motion.div>
  );
}

export default NxLogo;
