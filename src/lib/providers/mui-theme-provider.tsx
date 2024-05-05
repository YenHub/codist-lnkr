'use client';

import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
} from '@mui/material';

import theme from '@/lib/theme';

export const MuiThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  /**
   * NOTE: You can destructure `mode` from `useColourScheme` to identify the
   * user's mode
   */
  // const { setMode } = useColorScheme();

  return (
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      {getInitColorSchemeScript()}
      {children}
    </CssVarsProvider>
  );
};
