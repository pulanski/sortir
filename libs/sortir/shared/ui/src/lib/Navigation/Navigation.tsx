import { Collapse, Nav, Navbar, NavLink, UncontrolledDropdown } from 'reactstrap';
import { FcHome, FcSearch, FcCollaboration, FcConferenceCall, FcNumericalSorting12, FcScatterPlot, FcAbout, FcContacts, FcBiotech } from 'react-icons/fc';
import { IconButton, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { BiSun } from 'react-icons/bi';
import { Image } from '@chakra-ui/react';

import logo from '../../../../../../../apps/sortir/src/assets/logo.png';
import { StyledAiFillYoutube, StyledFaDiscord, StyledFaGithub, StyledMotionDiv, StyledNavbarBrand, StyledNavigation, StyledNavItem, StyledTypography } from './Navigation.styled';

/* eslint-disable-next-line */
export interface NavigationProps { }

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
          <StyledMotionDiv
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.25 },
            }}
          >
            <Image
              src={logo}
              boxSize='2.5rem'
              alt='Sortir logo'
              style={{
                borderRadius: '50% 20% / 10% 40%',
                marginRight: '0.5rem'
              }}
            />
            <Typography variant='h4'>
              sortir
            </Typography>
          </StyledMotionDiv>
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