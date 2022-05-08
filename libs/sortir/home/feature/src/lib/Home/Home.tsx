import styled from '@emotion/styled';
import { Autocomplete, Paper } from '@mui/material';
import SummonerSearch from '../../../../data-access/src/lib/SummonerSearch/SummonerSearch';
import { Image } from '@chakra-ui/react';
import { Carousel, Hero } from 'libs/sortir/home/ui/src';
import divider from './layeredwaves.png';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // , x: [0, 100]
      exit={{ x: window.innerWidth, opacity: 0 }}
    >
      <StyledHome>
        <Hero />
        <StyledImage src={divider} />
        <Carousel />
        <SummonerSearch />
      </StyledHome>
    </motion.div>
    // <StyledHome>
    //   <Hero />
    //   <StyledImage src={divider} />
    //   <Carousel />
    //   <SummonerSearch />
    // </StyledHome>
  );
}

export default Home;
