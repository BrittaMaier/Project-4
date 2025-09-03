import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm";
import { uid } from "uid";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });
  const defaultFormInput = {
    role: "some color",
    hex: "#123456",
    contrastText: "#FFFFFF",
  };
  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }
  function handleDeleteColor(deleteId) {
    const filterColors = colors.filter((color) => color.id != deleteId);
    setColors(filterColors);
  }
  function handleUpdateColor(updatedId, updates) {
    const mapColors = colors.map((color) =>
      color.id === updatedId ? { ...color, ...updates } : color
    );
    setColors(mapColors);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        hidden={false}
        onAddColor={handleAddColor}
        buttonText="ADD COLOR"
        defaultValues={defaultFormInput}
      ></ColorForm>
      <p hidden={colors.length > 0}>No colors.. start by adding one!</p>
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onUpdateColor={handleUpdateColor}
          />
        );
      })}
    </>
  );
}

export default App;
