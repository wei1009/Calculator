import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";

function Screen(){
    const { calc } = useContext( CalcContext );

    return (
        <Textfit className = "screen">123456789123312133212</Textfit>
    )
}

export default Screen;