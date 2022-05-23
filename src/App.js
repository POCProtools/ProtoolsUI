import Home from "components/pages/home/component"
import Login from "components/pages/login/component"
import "./App.css"
import { ThemeProvider } from "@mui/system"
import theme from "theme"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

export const muiCache = createCache({
  key: "mui",
  prepend: true,
})
function App() {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
