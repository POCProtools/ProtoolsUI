import React from "react"
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
      paddingBottom: 10,
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
  return (
    <>
      <SideBar />
      <CustomCard className={classes.card}>
        <CardContent>
          <Grid spacing={2} sx={{ marginTop: 3, marginBottom: 5 }}>
            <Logo className={classes.logo} />
            <span className={classes.titleCard}>Connexion</span>
          </Grid>
          <Grid
            direction="column"
            spacing={3}
            sx={{ marginTop: 3, marginBottom: 3 }}
            xs={4}
          >
            <span className={classes.inputTitle}>Email</span>
            <CustomTextField
              className={classes.TextField}
              variant="outlined"
              label="Adresse Email"
            />
            <span className={classes.inputTitle}>Mot de passe</span>
            <CustomTextField
              className={classes.TextField}
              variant="outlined"
              label="Mot de passe"
              type="password"
            />
          </Grid>
          <Button
            variant="contained"
            disableElevation
            sx={classes.boutonConnexion}
          >
            Connexion
          </Button>
        </CardContent>
      </CustomCard>
    </>
  )
}

export default Login
