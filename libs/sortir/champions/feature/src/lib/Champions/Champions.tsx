import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { StyledTypography } from 'libs/sortir/about/ui/src/lib/BuiltWithSection/BuiltWithSection.styled';
import ChampionSplashGrid from '../../../../data-access/src/lib/ChampionSplashGrid/ChampionSplashGrid';

/* eslint-disable-next-line */
export interface ChampionsProps { }

const StyledChampions = styled.div`
  color: pink;
`;

export function Champions(props: ChampionsProps) {
  return (
    <StyledChampions>
      {/* <SectionTitle variant='h5'>
        Built with
      </SectionTitle> */}
      <ChampionSplashGrid />
    </StyledChampions>
  );
}

export default Champions;
