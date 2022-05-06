import styled from '@emotion/styled';
import { Autocomplete, Paper } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import SummonerSearch from '../../../../data-access/src/lib/SummonerSearch/SummonerSearch';
import { Image } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface HomeProps { }

const StyledHome = styled(Paper)`
  color: pink;
  height: 100%;
  background-color: #1A202C;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <Navigation />
      
      <SummonerSearch />
    </StyledHome>
  );
}

export default Home;
