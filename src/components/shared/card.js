import React from "react"
import { makeStyles } from "tss-react/mui"
import { Card, Typography, CardContent } from "@mui/material"
import { alpha, styled } from "@mui/material/styles"
import palette from "theme/colors"

const CustomCard = styled(Card)(({ theme }) => ({
  color: palette.primary.main,
  borderRadius: 20,
  boxShadow: 3,
  position: "relative",
  zIndex: 0,
}))

export default CustomCard
