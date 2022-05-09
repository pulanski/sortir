import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { LogoImageProps } from '../../LogoImageProps.interface';
import { Image } from '@chakra-ui/react';
import { Tooltip, Zoom } from '@mui/material';

export interface FramerMotionLogoProps extends LogoImageProps {

}

const StyledFramerMotionLogo = styled.div`
  color: pink;
`;

function FramerMotionLogo(props: FramerMotionLogoProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.25
        }
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
        <Tooltip title="A library for creating animations in a declarative manner with React" TransitionComponent={Zoom} enterDelay={500} leaveDelay={200} arrow>
          <Image
            src={props.logoImage}
            alt={props.alt}
            height="6rem"
            style={{
              marginTop: '0.25rem'
            }}
          />
        </Tooltip>
      </a>
    </motion.div>
  );
}

export default FramerMotionLogo;
