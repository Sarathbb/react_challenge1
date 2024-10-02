import React from "react"

const ToogleBox = ({handleOnClickToogleBtn}) => {
  return (
    <button  className="toogleBtn"
             onClick={handleOnClickToogleBtn}>
        Toogle Color
    </button>
  )
}

export default ToogleBox