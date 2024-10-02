import './App.css';
import ColorBox from './ColorBox';
import TypeBox from './TypeBox';
import ToogleBox from './ToogleBox';
import { useState } from 'react';

function App() {
  const [colorText,setColorText] = useState('');
  const [toogleColor,setToogleColor] = useState('white');

  const handleOnChange = (e) => {
    const newText = e.target.value;
    setColorText(newText);
  }
  const handleOnClickToogleBtn = ()=>{
    toogleColor === 'black'? setToogleColor('white') : setToogleColor('black');
    //alert(toogleColor)
  }
  const hexColorCode = (color)=> {
    const hx = document.createElement('canvas').getContext('2d');
    hx.fillStyle = color;
    return hx.fillStyle;
  }
  return (
    <div className='mainDiv'>
      <ColorBox 
        toogleColor = {toogleColor}
        colorText = {colorText}
        hexColorCode = {hexColorCode}
      />
      <TypeBox 
        handleOnChange = {handleOnChange}
      />
      <ToogleBox 
        handleOnClickToogleBtn = {handleOnClickToogleBtn}
      />
    </div>
  );
}

export default App;
