import styled from '@emotion/styled';
import { Autocomplete, Paper } from '@mui/material';
import Navigation from '../../../../../shared/ui/src/lib/Navigation/Navigation';
import SummonerSearch from '../../../../data-access/src/lib/SummonerSearch/SummonerSearch';
import { Image } from '@chakra-ui/react';
import { Carousel, Hero } from 'libs/sortir/home/ui/src';
import Footer from '../../../../../shared/ui/src/lib/Footer/Footer';
import divider from './layeredwaves.png';

/* eslint-disable-next-line */
export interface HomeProps { }

const StyledHome = styled(Paper)`
  color: pink;
  height: 100%;
  background-color: #1A202C;
`;

const StyledImage = styled(Image)`
  width: 100%;
  margin-top: -4rem;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <Hero />
      <StyledImage src={divider} />
      <Carousel />
      <SummonerSearch />
    </StyledHome>
  );
}

export default Home;
