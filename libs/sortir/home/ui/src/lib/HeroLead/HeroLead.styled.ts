import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledHeroLead = styled(Typography)`
  padding-top: 2rem;
  padding-left: 10vw;
  padding-right: 10vw;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
`;

export const StyledSpanTitle = styled.span`
  color: #1852c6;
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 900;

  &:hover {
    color: #326de3;
    cursor: pointer;
  }
`;
