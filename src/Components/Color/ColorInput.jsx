import { useState } from "react";
export default function ColorInput({ name, defaultValue }) {
  const [colorInput, setColorInput] = useState("#123456");
  function handleChange(event) {
    setColorInput(event.target.value);
  }
  return (
    <>
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      <input
        type="color"
        name={name + "color"}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </>
  );
}
