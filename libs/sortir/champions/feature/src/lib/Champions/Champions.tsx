import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import ChampionSplashGrid from '../../../../data-access/src/lib/ChampionSplashGrid/ChampionSplashGrid';
import ChampionsLead from '../../../../ui/src/lib/ChampionsLead/ChampionsLead';

/* eslint-disable-next-line */
export interface ChampionsProps { }

const StyledChampions = styled(Paper)`
  margin: 4rem 0;
`;

export function Champions(props: ChampionsProps) {
  return (
    <StyledChampions>
      <ChampionsLead />
      <ChampionSplashGrid />
    </StyledChampions>
  );
}

export default Champions;
