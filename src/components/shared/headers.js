import React from "react"
import { makeStyles } from "tss-react/mui"

import palette from "theme/colors"

const useStyles = makeStyles()(theme => {
  return {
    appBar: {
      position: "relative",
      boxShadow: "none",
      borderBottom: `1px solid #FFD6BA`,
      backgroundColor: palette.primary.main,
    },
    inline: {
      display: "inline",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
  }
})
