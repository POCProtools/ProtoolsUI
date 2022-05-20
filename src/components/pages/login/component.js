import React, { useEffect, useState } from "react"
import SideBar from "components/shared/sidepanel"
import { makeStyles } from "tss-react/mui"
import {
  Grid,
  Typography,
  Link,
  CardContent,
  TextField,
  Button,
} from "@mui/material"
import CustomCard from "components/shared/card"
import CustomTextField from "components/shared/textfield"
import Logo from "components/shared/logo"
import palette from "theme/colors"

const useStyles = makeStyles()(theme => {
  return {
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30%",
    },
    logo: {
      padding: 20,
      marginLeft: 20,
    },
    titleCard: {
      display: "inline-block",
      marginLeft: 10,
      fontSize: 24,
      fontWeight: "bold",
      color: palette.primary.main,
    },
    TextField: {
      height: "10%",
      width: "90%",
    },
    inputTitle: {
      alignItems: "left",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      paddingTop: 10,
    },
    boutonConnexion: {
      backgroundColor: palette.secondary.main,
      padding: "18px 36px",
      justifyContent: "center",
      fontSize: "18px",
    },
  }
})
const Login = () => {
  const { classes } = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function handleSubmit(event) {
    console.log("Connexion attempt")
    console.log("email:", email)
  }
  return (
    <>
      <CustomCard className={classes.card}>
        <CardContent>
          <Grid
            spacing={2}
            sx={{ marginTop: 3, marginBottom: 5, alignContent: "center" }}
          >
            <Logo className={classes.logo} />
            <span className={classes.titleCard}>Connexion</span>
          </Grid>
          <Grid
            direction="column"
            spacing={3}
            sx={{ marginTop: 3, marginBottom: 3 }}
          >
            <span className={classes.inputTitle}>
              Email: <br />
            </span>
            <CustomTextField
              className={classes.TextField}
              id="email"
              variant="standard"
              label="Adresse Email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
            <span className={classes.inputTitle}>
              Mot de passe: <br />
            </span>
            <CustomTextField
              className={classes.TextField}
              id="password"
              variant="standard"
              label="Mot de passe"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Button
            variant="contained"
            disableElevation
            className={classes.boutonConnexion}
            onClick={() => handleSubmit()}
          >
            Connexion
          </Button>
        </CardContent>
      </CustomCard>
    </>
  )
}

export default Login
