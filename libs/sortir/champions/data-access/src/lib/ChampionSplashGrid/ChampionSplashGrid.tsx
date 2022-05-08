import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ChampionSplashGridProps {}

const StyledChampionSplashGrid = styled.div`
  color: pink;
`;

export function ChampionSplashGrid(props: ChampionSplashGridProps) {
  return (
    <StyledChampionSplashGrid>
      <h1>Welcome to ChampionSplashGrid!</h1>
    </StyledChampionSplashGrid>
  );
}

export default ChampionSplashGrid;
