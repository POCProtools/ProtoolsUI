import React from "react";
const inputStyles = {
    inputBox:{
        padding: ".5rem .8rem .5rem .8rem",
        margin: ".9vw 0",
        borderRadius: "2px"
    }
}
const Input = (props) => {
    return <input style={inputStyles.inputBox} type="text" {...props}/>
}

export default Input();
