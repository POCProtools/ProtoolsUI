import React from "react"
import { makeStyles } from "tss-react/mui"

import palette from "theme/colors"
import { AppBar, Toolbar, Grid, Link } from "@mui/material"
import { FiMoon, FiBook } from "react-icons/fi"

const useStyles = makeStyles()(theme => {
  return {
    appBar: {
      position: "relative",
      boxShadow: "none",
      elevation: 0,
      //color: palette.background.main,
    },
    gridContainer: {},

    textHeader: {
      flex: 1,
      fontSize: 14,
      fontWeight: "normal",
      margin: 7,
      color: palette.primary.main,
    },
    iconsHeader: {
      flex: 1,
      color: palette.primary.main,
    },
  }
})

const Header = () => {
  const { classes } = useStyles()
  return (
    <AppBar
      position="static"
      className={classes.appBar}
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <Grid
          container
          spacing={8}
          alignItems="baseline"
          className={classes.gridContainer}
          justifyContent="flex-end"
        >
          <Grid item xs={2}>
            <FiMoon className={classes.iconsHeader} />
            <span className={classes.textHeader}>Mode Sombre</span>
          </Grid>
          <Grid item xs={2}>
            <Link to="/documentation" underline="none">
              <FiBook className={classes.iconsHeader} />
              <span className={classes.textHeader}>Documentation</span>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
