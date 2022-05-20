import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles"

import palette from "./colors"
import typo from "./typo"

const theme = createTheme({
  //TODO : Fix this
  palette: { palette },
  typography: { typo },
  overrides: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: 2,
          position: "relative",
          zIndex: 0,
        },
      },
    },
  },
})
export default theme
