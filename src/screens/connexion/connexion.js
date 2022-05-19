import React from "react";

import Card from "./components/Cards/card";
import logoProtools from '../../assets/logoProtools.svg';

const connexionStyles = {
    frame :{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

}
function Connexion(){
    return (
        <div>
            <Card />
        </div>
    )
}
export default Connexion


