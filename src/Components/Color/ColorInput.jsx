import { useState } from "react"
export default function ColorInput{
    const[colorInput,setColorInput]=useState("#123456")
    function handleColorInputChange(event){
        setColorInput(event.target.value)
    }
    return(
        <>
        <input type="text" name="hexText" value={colorInput} onColorInputChange={handleColorInputChange}/>
        <input type="color" name="hexColor" value={colorInput} onColorInputChange={handleColorInputChange} />
        </>
    )
}