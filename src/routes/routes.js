import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "components/pages/home/component"
import Login from "components/pages/login/component"
import SideBar from "components/shared/sidepanel"
import Header from "components/shared/headers"
const RoutesWeb = () => {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Router>
  )
}

export default RoutesWeb
