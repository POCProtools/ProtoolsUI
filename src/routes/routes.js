import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "components/pages/home/component"
const RoutesWeb = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} exact element={<Home />} />
      </Routes>
    </Router>
  )
}

export default RoutesWeb
