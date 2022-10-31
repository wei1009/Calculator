import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

function getStyleName(btn) {
    const className = {
        "=": "equals"
    }
    return className[btn]
}

function Button({ value }) {

    const { calc, setCalc } = useContext(CalcContext)

    // User click comma
    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
        })
    }

    // User click C
    const resetClick = () => {
        setCalc({
            sign: "",
            num: 0,
            res: 0
        })
    }

    // User click number

    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        if (numberString === "0" && calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    // User click operation

    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    // User click equals

    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    "+": (a, b) => a + b,
                    "-": (a, b) => a - b,
                    "x": (a, b) => a * b,
                    "/": (a, b) => a / b,
                }
                return result[sign](a, b);
            }
            setCalc({
                sign: "",
                res: math(calc.res, calc.num, calc.sign),
                num: 0
            })
        }
    }

    // User click persen button
    const persenClick = () => {
        setCalc({
            sign: "",
            res: (calc.res / 100),
            num: (calc.num / 100)

        })

    }

    // User click invert button
    const invertClick = () => {
        setCalc({
            sign: "",
            res: calc.res ? calc.res * -1 : 0,
            num: calc.num ? calc.num * -1 : 0
        })

    }

    const handleBtnClick = () => {
        const results = {
            ".": commaClick,
            "C": resetClick,
            "/": signClick,
            "x": signClick,
            "-": signClick,
            "+": signClick,
            "=": equalsClick,
            "%": persenClick,
            "+-": invertClick
        }
        if (results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }

    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button