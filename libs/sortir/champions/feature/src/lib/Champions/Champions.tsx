import styled from '@emotion/styled';
import ChampionSplashGrid from '../../../../data-access/src/lib/ChampionSplashGrid/ChampionSplashGrid';

/* eslint-disable-next-line */
export interface ChampionsProps { }

const StyledChampions = styled.div`
  color: pink;
`;

export function Champions(props: ChampionsProps) {
  return (
    <StyledChampions>
      <h1>Welcome to Champions!</h1>
      <ChampionSplashGrid />
    </StyledChampions>
  );
}

export default Champions;
