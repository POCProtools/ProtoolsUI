import React, {useState} from "react";
import {ReactComponent as Icon} from "../../../assets/logoProtools.svg";
import {Colors} from "../../../values/colors";
import validator from 'validator'
import './connexion.css'
import {Button, Checkbox, FormControlLabel} from "@mui/material";

const cardStyles = {
    container: {
        boxShadow: "3px 3px 8px #cec7c759",
        padding: 20,
        borderRadius: 20,
        height: '50vw',
        width: '40vw',
    },
    containerHeader: {
        display: "flex",
        margin: "3.5vw",
        alignItems: "middle"
    },
    header: {
        textAlign: 'center',
        fontSize : '1.8em',
        fontFamily: 'Helvetica',
        color: Colors.mainText,
        fontWeight: 'bold',
        alignItems: "middle"
    },
    logo: {
        fill: Colors.secondGreen,
        height: '90px',
        padding: '10px',
        alignItems: "middle"
    },
    inputStyle :{
        padding: ".5rem .8rem 0.5rem .8rem",
        margin: "1.2vw 0 2vw 0",
        borderRadius: "8px",
        width: "25rem",
        height: "2.6rem",
        backgroundColor: Colors.pressedGrey,
        border: 0,
        fontSize: 16,
    },
    inputTitle: {
        paddingTop: "0.5rem",
        paddingLeft: "2.5rem",
        fontSize : '20px',
        fontFamily: 'Helvetica',
        color: Colors.mainText,
        fontWeight: 'bold',
        textAlign: "left"
    }
};
const Card = ({height,length}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const validateEmail = (email) => {

        if (validator.isEmail(email)) {
            setEmail(email)
            console.log("Valid Email")
        } else {
            setEmailError('Enter valid Email!')
            setEmail('')
            console.log("Invalid Email")
        }
    }
    function handleSubmit(event) {
        //event.preventDefault();
        validateEmail(email)
    }
    return (
        <div style={cardStyles.container}>
            <div style={cardStyles.containerHeader}>
                <Icon style={cardStyles.logo}/>
                <div style={cardStyles.header}>Connexion Agent</div>
            </div>
            <div style={cardStyles.inputTitle}>Nom d'utilisateur</div>
            <input style={cardStyles.inputStyle}
                placeholder="Adresse Email"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div style={cardStyles.inputTitle}>Mot de passe</div>
            <input style={cardStyles.inputStyle}
                   placeholder="Mot de passe"
                   id="password"
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{display:"flex"}}>
                <div><FormControlLabel control={<Checkbox />} label="Se souvenir de moi" /></div>
                <div className="text-3">Mot de passe oublié</div>
            </div>
            <br/>
            <Button variant="contained"
                    disableElevation
                    onClick={()=> handleSubmit()}>
                Se connecter
            </Button>

        </div>
    )

}

export default Card
