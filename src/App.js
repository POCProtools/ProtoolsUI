import Home from "components/pages/home/component"
import Login from "components/pages/login/component"
import "./App.css"
import { ThemeProvider } from "@mui/system"
import theme from "theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  )
}

export default App
