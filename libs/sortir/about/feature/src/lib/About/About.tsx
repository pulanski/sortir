import { BuiltWithSection } from '../../../../ui/src/lib/BuiltWithSection/BuiltWithSection';
import styled from '@emotion/styled';
import { Paper, Card, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';
import CubeContainer from '../../../../ui/src/lib/CubeContainer/CubeContainer';
import { Temp } from '@sortir/sortir/about/ui';

/* eslint-disable-next-line */
export interface AboutProps { }

const StyledAbout = styled(Paper)`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* margin: 2rem; */
  /* border: 1px solid pink; */
`;

export function About(props: AboutProps) {

  return (
    <StyledAbout>
      <BuiltWithSection />
      {/* <CubeContainer /> */}
      {/* <Temp /> */}
    </StyledAbout>
  );
}

export default About;
