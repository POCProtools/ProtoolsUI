import React from "react"
import { makeStyles } from "tss-react/mui"
import { TextField } from "@mui/material"
import { alpha, styled } from "@mui/material/styles"
import palette from "theme/colors"

const CustomTextField = styled(TextField)(({ theme }) => ({
  color: palette.primary.main,
  background: "#fcfdfe",
  borderRadius: 20,
  fontSize: 10,
}))

export default CustomTextField
