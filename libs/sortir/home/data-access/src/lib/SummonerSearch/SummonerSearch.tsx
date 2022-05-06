import styled from '@emotion/styled';
import { Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { BsArrowDownShort } from 'react-icons/bs';
import { Input } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface SummonerSearchProps { }

const StyledSummonerSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const regions = ['NA', 'EUW', 'KR'];

export function SummonerSearch(props: SummonerSearchProps) {

  return (
    <StyledSummonerSearch>
      {/* <Menu>
        <MenuButton as={Button}>
          Region
        </MenuButton>
        <MenuList>
          {regions.map((region) => (
            <MenuItem key={region}>
              <MenuItemOption>
                {region}
              </MenuItemOption>
            </MenuItem>
          ))}
        </MenuList>
      </Menu> */}

      <Input placeholder='Search...' size='lg' />
    </StyledSummonerSearch>
  );
}

export default SummonerSearch;

{/* <TextField
        id="outlined-basic"
        label="Search"
        helperText="Name1, Name2, ..."
        variant="outlined"
      /> */}