import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "components/pages/home/component"
import Login from "components/pages/login/component"
const RoutesWeb = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/login"} exact element={<Login />} />
      </Routes>
    </Router>
  )
}

export default RoutesWeb
