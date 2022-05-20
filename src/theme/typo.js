import { alpha } from "@mui/material/styles"
import palette from "./palette"

const FONT_PRIMARY = "Sora, sans-serif"

function pxToRem(value) {
  return `${value / 16}rem`
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    // sm : small, md : medium, lg : large -- frame
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  }
}

const typo = {
  ontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
}
export default typo
