import React, { useState, useEffect } from "react"
import SideBar from "components/shared/sidepanel"
import { GlobalStyles } from "tss-react"
import Header from "../../shared/headers"
import { Grid } from "@mui/material"
import CustomCard from "../../shared/card"
import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles()(theme => {
  return {
    root: {
      body: {
        backgroundColor: theme.palette.background.default,
      },
    },
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30%",
      marginLeft: "45%",
      marginTop: "10%",
    },
    titleCard: {
      position: "absolute",
      top: "25%",
      left: "25%",
      marginLeft: 10,
      fontSize: 24,
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  }
})

const Home = () => {
  const { classes } = useStyles()
  const api = "https://random-words-api.vercel.app/word"
  const [word, setWord] = useState("")
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(api)
      response = await response.json()
      console.log(response)
      setWord(response[0].word)
      console.log(word)
    }
    fetchData()
  }, [])

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#F9FAFC",
          },
        }}
      />
      <Header />
      <SideBar />
      <Grid justifyContent="center">
        <CustomCard className={classes.card}>
          <span className={classes.titleCard}>Random Word:</span>
          <span>{word}</span>
        </CustomCard>
      </Grid>
    </>
  )
}

export default Home
