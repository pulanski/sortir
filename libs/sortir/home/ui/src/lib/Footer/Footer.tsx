import styled from '@emotion/styled';
import { Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface FooterProps { }

const StyledFooter = styled.footer`
  padding: 0.75rem;
  text-align: center;
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <Typography>
        Copyright © {new Date().getFullYear()} sortir, Inc. Built with libraries from the React ecosystem.
      </Typography>
    </StyledFooter>
  );
}

export default Footer;
