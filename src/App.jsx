import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";
import { uid } from "uid";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    setColors([...colors, { id: uid(), ...newColor }]);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor}></ColorForm>
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
