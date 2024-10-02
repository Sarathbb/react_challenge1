import React from "react"

const ColorBox = ({toogleColor,colorText,hexColorCode}) => {
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: colorText,
        borderRadius: '10px',
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <div style={boxStyle}>
        <h3 style={{color: toogleColor}}>{colorText}</h3>
        <p style={{color: toogleColor}}>{colorText? `${hexColorCode(colorText)}` : ''}</p>
    </div>
  )
}

export default ColorBox