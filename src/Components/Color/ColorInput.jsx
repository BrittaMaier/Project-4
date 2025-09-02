import { useState } from "react";
export default function ColorInput({ name, defaultValue }) {
  const [colorInput, setColorInput] = useState(defaultValue);
  function handleChange(event) {
    setColorInput(event.target.value);
  }
  return (
    <>
      <input
        type="text"
        name={name}
        value={colorInput}
        onChange={handleChange}
      />
      <input
        type="color"
        name={name + "Color"}
        value={colorInput}
        onChange={handleChange}
      />
    </>
  );
}
