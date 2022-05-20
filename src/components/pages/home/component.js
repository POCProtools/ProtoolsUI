import React from "react"
import SideBar from "components/shared/sidepanel"
import { Grid, Typography, Link, CardContent } from "@mui/material"
import CustomCard from "components/shared/card"
const Home = () => {
  return (
    <>
      <SideBar />
      <CustomCard>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CardContent example
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This Card's children are wrapped in a CardContent component, which
            adds 16px of padding around the edges. The last CardContent in a
            group of children will get 24px of padding on the bottom.
          </Typography>
        </CardContent>
      </CustomCard>
    </>
  )
}

export default Home
