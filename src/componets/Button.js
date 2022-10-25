function getStyleName(btn){
    const className = {
        "=":"equals"
    }
    return className[btn]
}

function Button( {value} ){
    return (
        <button className= {`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button