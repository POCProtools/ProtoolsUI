import React, { useState } from "react"
import {
  Grid,
  Typography,
  Link,
  CardContent,
  Button,
  Drawer,
} from "@mui/material"
import { makeStyles } from "tss-react/mui"
import { GlobalStyles } from "tss-react"
import { FiHome, FiList, FiBarChart2, FiCpu } from "react-icons/fi"

import Logo from "./logo"
import { ThemeProvider } from "@mui/private-theming"
import theme from "theme"
import palette from "theme/colors"

const useStyles = makeStyles()(theme => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      "&&": {
        width: drawerWidth,
        backgroundColor: palette.background.main,
      },
    },
    logo: {
      padding: 20,
      marginLeft: 20,
    },
    titleSidebar: {
      display: "inline-block",
      marginLeft: 10,
      fontSize: 24,
      fontWeight: "bold",
      color: palette.primary.main,
    },

    textSidebar: {
      display: "inline-block",
      marginLeft: 10,
      fontSize: 20,
      fontWeight: "bold",
      color: palette.primary.main,
    },
    icon: {
      marginLeft: 20,
      color: palette.primary.main,
    },
  }
})

const drawerWidth = 240

const SideBar = () => {
  const { classes } = useStyles()
  //TODO : Gestion state page actuelle
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: palette.background.main,
          },
        }}
      />
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
      >
        <Grid spacing={2} sx={{ marginTop: 3, marginBottom: 5, marginLeft: 2 }}>
          <Logo
            // @ts-ignore
            className={classes.logo}
          />
          <span className={classes.titleSidebar}>
            Protools <br />
            Dashboard
          </span>
        </Grid>

        <Grid direction="column" spacing={3} sx={{ marginLeft: 2 }} xs={4}>
          <Link to="/" className={classes.link}>
            <Grid sx={{ marginTop: 2 }}>
              <FiHome className={classes.icon} />
              <span className={classes.textSidebar}>Home</span>
            </Grid>
          </Link>
          <Link to="/processes" className={classes.link}>
            <Grid spacing={1} sx={{ marginTop: 2 }}>
              <FiList className={classes.icon} />
              <span className={classes.textSidebar}>Processes</span>
            </Grid>
          </Link>
          <Link to="/logs" className={classes.link}>
            <Grid spacing={1} sx={{ marginTop: 2 }}>
              <FiBarChart2 className={classes.icon} />
              <span className={classes.textSidebar}>Logs</span>
            </Grid>
          </Link>
          <Link to="/admin" className={classes.link}>
            <Grid spacing={1} sx={{ marginTop: 2 }}>
              <FiCpu className={classes.icon} />
              <span className={classes.textSidebar}>Admin</span>
            </Grid>
          </Link>
        </Grid>
      </Drawer>
    </>
  )
}

export default SideBar
