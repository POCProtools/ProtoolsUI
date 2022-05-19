import React from "react";
import logoProtools from "../../../../assets/logoProtools.svg";


const cardStyles = {
    container: {
        display: "flex",
        boxShadow: "3px 3px 8px #cec7c759",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        height: '633px',
        width: '504px',
    },
    header: {
        textAlign: 'center',
        verticalAlign: 'top',
        fontSize : '36px',
        fontFamily: 'Helvetica',
        color: '#555B6E'
    },
    logo: {
        fill: '#89B0AE',
        height: '90px',
        padding: '10px'
    }
};
const Card = ({height,length}) => {
    return (
        <div style={cardStyles.container}>
            <div style={cardStyles.header}>Connexion Agent</div>
            <img style={cardStyles.logo} src={logoProtools} />
        </div>
    )

}

export default Card
