import PropTypes from "prop-types" //Type check
import { CssBaseline } from "@mui/material"
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/private-theming"

import palette from "./colors"
import typo from "./typo"
import componentOverrides from "./overrides"
import { useMemo } from "react"

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      typo,
    }),
    []
  )

  const theme = createTheme(themeOptions)
  theme.componentOverrides = componentOverrides(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
