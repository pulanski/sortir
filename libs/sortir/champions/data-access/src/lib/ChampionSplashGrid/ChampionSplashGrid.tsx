import styled from '@emotion/styled';
import { useQuery } from 'react-query';

/* eslint-disable-next-line */
export interface ChampionSplashGridProps { }

const StyledChampionSplashGrid = styled.div`
  color: pink;
`;

async function fetchChampionSplashes(): Promise<any> {
  const championSplashesUrl = 'https://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json';
  const response = await fetch(championSplashesUrl);
  return response.json();
}

export function ChampionSplashGrid(props: ChampionSplashGridProps) {

  const { data, status } = useQuery('championSplashes', fetchChampionSplashes);
  console.log('data', data);

  return (
    <StyledChampionSplashGrid>
      <h1>Welcome to ChampionSplashGrid!</h1>
    </StyledChampionSplashGrid>
  );
}

export default ChampionSplashGrid;
