import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { useState } from 'react';
import Favicon from 'react-favicon';
import Core from '../../../../libs/sortir/core/feature/src/lib/Core/Core';

const StyledApp = styled(Paper)`
  // Your style here
`;

export function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <StyledApp>
      <Core />
    </StyledApp>
  );
}

export default App;