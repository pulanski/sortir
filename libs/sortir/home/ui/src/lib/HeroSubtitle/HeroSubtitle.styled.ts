import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledHeroSubtitle = styled(Typography)`
  padding: 1rem 5vw;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
`;

export const StyledSpanSubtitle = styled.span`
  color: #1852c6;
  font-size: 1.15rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 900;

  &:hover {
    color: #326de3;
    cursor: pointer;
  }
`;
