import React, { useState } from "react"
import { Grid, Link, Button, Drawer } from "@mui/material"
import { makeStyles } from "tss-react/mui"

import { FiHome, FiList, FiBarChart2, FiCpu } from "react-icons/fi"

import Logo from "./logo"

const useStyles = makeStyles()(theme => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      "&&": {
        width: drawerWidth,
        backgroundColor: theme.palette.background.default,
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
      color: theme.palette.primary.main,
    },

    textSidebar: {
      display: "inline-block",
      marginLeft: 10,
      fontSize: 20,
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
    icon: {
      marginLeft: 20,
      color: theme.palette.primary.main,
    },
    boutonConnexion: {
      fontSize: "14px",
      marginTop: 10,
      marginLeft: 20,
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      fontWeight: "bold",
      borderRadius: 15,
      borderWidth: 2,
      "&:hover": {
        borderWidth: 2,
      },
    },
  }
})

const drawerWidth = 240

const SideBar = () => {
  const { classes } = useStyles()
  //TODO : Gestion state page actuelle
  return (
    <>
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
          <Grid spacing={1} sx={{ marginTop: 2 }}>
            <Button
              variant="outlined"
              href="/login"
              className={classes.boutonConnexion}
            >
              Connexion
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  )
}

export default SideBar
