import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { NavLink } from 'reactstrap';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface MUILogoProps extends LogoImageProps { }

const StyledMUILogo = styled.div`
  color: pink;
`;

export function MUILogo(props: MUILogoProps) {
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
          height="8rem"
          style={{
            marginTop: '-1rem',
          }}
        />
      </NavLink>
    </motion.div>
  );
}

export default MUILogo;
