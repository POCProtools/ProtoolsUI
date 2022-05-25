import Home from "components/pages/home/component"
import "./App.css"
import { ThemeProvider } from "@mui/system"
import theme from "theme"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import RoutesWeb from "routes/routes"

export const muiCache = createCache({
  key: "mui",
  prepend: true,
})
function App() {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <RoutesWeb />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
