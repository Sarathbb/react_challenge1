import React from "react"

const TypeBox = ({handleOnChange}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" 
               className="typeBox"
               placeholder="Enter Color Name"
               onChange={handleOnChange}/>
    </form>
  )
}

export default TypeBox