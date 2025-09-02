import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";
import { uid } from "uid";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }
  function handleDeleteColor(deleteId) {
    const filterColors = colors.filter((color) => color.id != deleteId);
    setColors(filterColors);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor}></ColorForm>
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
          />
        );
      })}
    </>
  );
}

export default App;
