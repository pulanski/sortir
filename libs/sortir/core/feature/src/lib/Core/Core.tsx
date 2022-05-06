import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import FaviconConfig from '../FaviconConfig/FaviconConfig';
import RouterConfig from '../RouterConfig/RouterConfig';
import BootstrapContent from '../../../../../bootstrap/ui/src/lib/BootstrapContent/BootstrapContent';

/* eslint-disable-next-line */
export interface CoreProps { }

const StyledCore = styled.div`
`;

const StyledPage = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#0B1929, #104171);
`;

export function Core(props: CoreProps) {

  // const [isBootstrapping, setIsBootstrapping] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsBootstrapping(false);
  //   }, 3000);
  // }, []);

  // return isBootstrapping ? (
  //   <StyledPage>
  //     <FaviconConfig />
  //     <BootstrapContent />
  //   </StyledPage>
  // ) : (
  //   <>
  //     <FaviconConfig />
  //     <RouterConfig />
  //   </>
  // );
  return (
    <>
      <FaviconConfig />
      <RouterConfig />
    </>
  );
}

export default Core;
