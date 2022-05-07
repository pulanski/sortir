import styled from '@emotion/styled';
import { Collapse, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { FcHome, FcSearch, FcCollaboration, FcConferenceCall, FcNumericalSorting12, FcScatterPlot, FcAbout, FcContacts, FcBiotech } from 'react-icons/fc';
import { Button, IconButton, Paper, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BiSun } from 'react-icons/bi';
import { Image } from '@chakra-ui/react'
import logo from '../../../../../../../apps/sortir/src/assets/logo.png';

/* eslint-disable-next-line */
export interface NavigationProps { }

const StyledNavigation = styled(Paper)`
`;

const StyledNavbarBrand = styled(NavbarBrand)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  margin-left: 0.5rem;
`;

const StyledNavItem = styled(NavItem)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFaGithub = styled(FaGithub)`
  color: white;
  &:hover {
    color: #aba7a7;
  }
`;

const StyledFaDiscord = styled(FaDiscord)`
  color: #5C68F5;
  &:hover {
    color: #5c69f59f;
  }
`;

const StyledAiFillYoutube = styled(AiFillYoutube)`
  color: #ff0000;
  &:hover {
    color: #ff00009f;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50% 20% / 10% 40%;
  margin-right: 0.5rem;
`;

interface Options {
  linkName: string;
  to: string;
  icon: ReactElement;
}

const NavigationOptions: Options[] = [
  {
    linkName: 'Home',
    to: '/',
    icon: <FcHome size={14} />,
  },
  {
    linkName: 'Live Game',
    to: '/live-game',
    icon: <FcCollaboration />,
  },
  {
    linkName: 'Multi Search',
    to: '/multi-search',
    icon: <FcSearch />,
  },
  {
    linkName: 'Champions',
    to: '/champions',
    icon: <FcConferenceCall />,
  },
  {
    linkName: 'Stats',
    to: '/stats',
    icon: <FcScatterPlot />,
  },
  {
    linkName: 'Leaderboards',
    to: '/leaderboards',
    icon: <FcNumericalSorting12 />,
  },
  {
    linkName: 'Dodging Engine',
    to: '/dodging-engine',
    icon: <FcBiotech />,
  },
  {
    linkName: 'About',
    to: '/about',
    icon: <FcAbout />,
  },
  {
    linkName: 'Contact',
    to: '/contact',
    icon: <FcContacts />,
  },
];

export function Navigation(props: NavigationProps) {
  return (
    <StyledNavigation>
      <Navbar
        color="dark"
        expand="xl"
      >
        <StyledNavbarBrand href="/">
          <StyledImage
            src={logo}
            boxSize='2.5rem'
            alt='Sortir logo'
          />
          <Typography variant='h4'>
            sortir
          </Typography>
        </StyledNavbarBrand>

        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            {NavigationOptions.map((option) => (
              <StyledNavItem key={option.linkName}>
                <NavLink href={option.to}>
                  {option.icon}
                  <StyledTypography variant='caption'>
                    {option.linkName}
                  </StyledTypography>
                </NavLink>
              </StyledNavItem>
            ))}
          </Nav>
          <NavLink href="https://github.com/pulanski/sortir">
            <StyledFaGithub size={20} />
          </NavLink>
          <NavLink href="https://discord.com/users/191731384845336576">
            <StyledFaDiscord size={20} />
          </NavLink>
          <NavLink href="https://youtube.com/channel/fi">
            <StyledAiFillYoutube size={20} />
          </NavLink>
          <IconButton aria-label="dark-mode">
            <BiSun size={20} />
          </IconButton>
        </Collapse>
      </Navbar>
    </StyledNavigation >
  );
}

export default Navigation;

{/* <Button variant="outlined" startIcon={option.icon} size='small' >
                    <Typography variant='caption'>
                      {option.linkName}
                    </Typography>
                  </Button> */}


{/* // <NavItem>
            //   <NavLink href="/">
            //     <Button variant="outlined" startIcon={<FcHome size={14} />} size='small' >
            //       Home
            //     </Button>
            //   </NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/search">
            //     <Button variant="outlined" startIcon={<FcSearch size={14} />} size='small' >
            //       Search
            //     </Button>
            //   </NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/search">
            //     <Button variant="outlined" startIcon={<FcSearch size={14} />} size='small' >
            //       Search
            //     </Button>
            //   </NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/search">
            //     <Button variant="outlined" startIcon={<FcSearch size={14} />} size='small' >
            //       Search
            //     </Button>
            //   </NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/search">
            //     <Button variant="outlined" startIcon={<FcSearch size={14} />} size='small' >
            //       Search
            //     </Button>
            //   </NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/search">
            //     <Button variant="outlined" startIcon={<FcSearch size={14} />} size='small' >
            //       Search
            //     </Button>
            //   </NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/search">
            //     <Button variant="outlined" startIcon={<FcSearch size={14} />} size='small' >
            //       Search
            //     </Button>
            //   </NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/search">
            //     <Button variant="outlined" startIcon={<FcSearch size={14} />} size='small' >
            //       Search
            //     </Button>
            //   </NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/search">
            //     <Button variant="outlined" startIcon={<FcSearch size={14} />} size='small' >
            //       Search
            //     </Button>
            //   </NavLink>
            // </NavItem> */}
{/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}