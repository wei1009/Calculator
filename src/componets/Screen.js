import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";

function Screen() {
    const { calc } = useContext(CalcContext);

    return (
        <Textfit className="screen">{calc.num ? calc.num : calc.res}</Textfit>
    )
}

export default Screen;