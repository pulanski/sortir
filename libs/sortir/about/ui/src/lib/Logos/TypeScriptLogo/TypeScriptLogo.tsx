import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { NavLink } from 'reactstrap';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface TypeScriptLogoProps extends LogoImageProps { }

const StyledTypeScriptLogo = styled.div`
  color: pink;
`;

export function TypeScriptLogo(props: TypeScriptLogoProps) {
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
            margin: 'auto auto',
          }}
        />
      </NavLink>
    </motion.div>
  );
}

export default TypeScriptLogo;
