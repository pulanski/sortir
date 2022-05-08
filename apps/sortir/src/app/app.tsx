import styled from '@emotion/styled';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import { palette } from '@mui/system';
import { createContext, useState } from 'react';
import Favicon from 'react-favicon';
import Core from '../../../../libs/sortir/core/feature/src/lib/Core/Core';

const StyledApp = styled(Paper)`
  // Your style here
`;

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      margin: 0,
    },
    h4: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: '2rem',
      margin: 0,
    },
    h5: {
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      margin: 0,
    }
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

// export const DarkModeContext = createContext(false);

export function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    // <DarkModeContext.Provider value={darkMode}>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledApp>
        <Core />
      </StyledApp>
    </ThemeProvider>
    // </DarkModeContext.Provider>
  );
}

export default App;