import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

/* eslint-disable-next-line */
export interface LoadingProps {}

const StyledLoading = styled(Paper)`
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#0b1929, #104171);
`;

const StyledCirclesWithBar = styled(CirclesWithBar)`
  /* add highlight shadow effect */
`;

export function Loading(props: LoadingProps) {
  const [color, setColor] = useState('#07213a');

  useEffect(() => {
    setTimeout(() => {
      setColor(color === '#07213a' ? '#104171' : '#07213a');
    }, 2000);
  }, [color]);

  return (
    <StyledLoading>
      <StyledCirclesWithBar
        color={color}
        outerCircleColor="#104171"
        innerCircleColor="#07213a"
      />
    </StyledLoading>
  );
}

export default Loading;
