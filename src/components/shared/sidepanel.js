import React, { useState } from "react"
import { Grid, Typography, Link } from "@mui/material"
import { makeStyles } from "tss-react/mui"
import { alpha, styled } from "@mui/material/styles"
import { FiHome, FiList, FiBarChart2, FiCpu } from "react-icons/fi"

import Logo from "./logo"

const useStyles = makeStyles()(theme => {
  return {
    logo: {
      padding: 20,
    },
    titleSidebar: {
      display: "inline-block",
      marginLeft: 10,
      fontSize: 24,
      fontWeight: "bold",
      color: theme.palette.primary,
    },

    textSidebar: {
      display: "inline-block",
      marginLeft: 10,
      fontSize: 20,
      fontWeight: "bold",
      color: theme.palette.primary,
    },
    icon: {
      marginLeft: 20,
    },
  }
})

const SideBar = () => {
  const { classes } = useStyles()
  //TODO : Gestion state page actuelle
  return (
    <>
      <Typography color="primary" noWrap>
        <Grid spacing={2} sx={{ marginTop: 3, marginBottom: 5 }}>
          <Logo className={classes.logo} />
          <span className={classes.titleSidebar}>Protools Dashboard</span>
        </Grid>
      </Typography>
      <Grid direction="column" spacing={3} sx={{ marginTop: 3 }}>
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
    </>
  )
}

export default SideBar
