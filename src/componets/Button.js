import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

function getStyleName(btn){
    const className = {
        "=":"equals"
    }
    return className[btn]
}

function Button( {value} ){

    const { calc, setCalc } = useContext(CalcContext)

    const commaClick = () => {
        setCalc({
            ...CalcContext,
            num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
        })
    }

    const handleBtnClick = () =>{
        const results = {
            ".":commaClick
        }
        return results[value]()
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button