// @ts-ignore
import React, { useEffect, useState } from "react"
// @ts-ignore
import SideBar from "components/shared/sidepanel"
import { makeStyles } from "tss-react/mui"
import {
  Grid,
  // @ts-ignore
  Link,
  CardContent,
  // @ts-ignore
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
  Stack,
  Checkbox,
} from "@mui/material"
import CustomCard from "components/shared/card"
import Logo from "components/shared/logo"
import Header from "components/shared/headers"
import { FiEye, FiEyeOff } from "react-icons/fi"

// @ts-ignore
const useStyles = makeStyles()(theme => {
  return {
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30%",
      marginLeft: "45%",
      marginTop: "10%",
    },
    TitleHeader: {
      //margin: 5,
      marginTop: 5,
      marginBottom: 20,
      position: "relative",
    },
    logo: {
      verticalAlign: "middle",
    },
    titleCard: {
      position: "absolute",
      top: "25%",
      marginLeft: 10,
      fontSize: 24,
      fontWeight: "bold",
      color: "primary",
    },
    TextField: {
      height: "10%",
      color: "primary",
      background: "#fcfdfe",
      borderRadius: 20,
      fontSize: 10,
    },
    inputTitle: {
      alignItems: "center",
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 20,
    },
    boutonConnexion: {
      fontSize: "14px",
      marginTop: 20,
      backgroundColor: "secondary",
      "&:hover": {
        backgroundColor: "secondary",
      },
      fontWeight: "bold",
      borderRadius: 15,
    },
    remindsMe: {
      fontSize: "11px",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
  }
})
const Login = () => {
  const { classes } = useStyles()
  const [email, setEmail] = useState("")
  // @ts-ignore
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  // @ts-ignore
  function handleSubmit(event) {
    console.log("Connexion attempt")
    console.log("email:", email)
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  return (
    <>
      <Header />
      <SideBar />
      <Grid container justify="center">
        <CustomCard className={classes.card}>
          <CardContent>
            <div className={classes.TitleHeader}>
              <Logo
                // @ts-ignore
                className={classes.logo}
              />
              <span className={classes.titleCard}>Connexion</span>
            </div>
            <Stack spacing={3} alignItems="center">
              <Box
                sx={{
                  marginTop: 2,
                  width: "120%",
                }}
              >
                <span className={classes.inputTitle}>Email:</span>
                <br />
                <TextField
                  fullWidth
                  className={classes.TextField}
                  id="email"
                  variant="standard"
                  label="Adresse Email"
                  type="email"
                  sx={{
                    "& label.Mui-focused": {
                      display: "none",
                    },
                    "& legend": {
                      display: "none",
                    },
                  }}
                  onChange={e => setEmail(e.target.value)}
                />
              </Box>
              <Box sx={{ marginTop: 2, marginBottom: 6, width: "120%" }}>
                <span className={classes.inputTitle}>
                  Mot de passe: <br />
                </span>
                <TextField
                  fullWidth
                  className={classes.TextField}
                  id="password"
                  variant="standard"
                  label="Mot de passe"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <FiEyeOff size={20} />
                          ) : (
                            <FiEye size={20} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& label.Mui-focused": {
                      display: "none",
                    },
                    "& legend": {
                      display: "none",
                    },
                  }}
                  onChange={e => setPassword(e.target.value)}
                />
              </Box>
              <Grid
                container
                alignItems="baseline"
                justifyContent="space-between"
                sx={{ width: "120%" }}
              >
                <Grid item>
                  <Checkbox
                    sx={{
                      color: "secondary",
                      "&.Mui-checked": {
                        color: "secondary",
                      },
                      padding: 0.5,
                    }}
                    size="small"
                  />
                  <span className={classes.remindsMe}>Se souvenir de moi</span>
                </Grid>
                <Link
                  to="/reset-password"
                  className={classes.remindsMe}
                  color="secondary"
                >
                  Mot de passe oublié
                </Link>
              </Grid>
            </Stack>
            <Box textAlign="center">
              <Button
                disableElevation
                variant="contained"
                className={classes.boutonConnexion}
                onClick={() => handleSubmit()}
                sx={{
                  justifyContent: "center",
                  paddingLeft: 3,
                  paddingRight: 3,
                }}
              >
                Connexion
              </Button>
            </Box>
          </CardContent>
        </CustomCard>
      </Grid>
    </>
  )
}

export default Login
