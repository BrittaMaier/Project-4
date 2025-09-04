import "./Color.css";
import Button from "../Button/Button";
import CopyToClipboard from "../Button/CopyToClipboard";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <CopyToClipboard hex={color.hex}></CopyToClipboard>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <Button
        onDeleteColor={() => onDeleteColor(color.id)}
        currentColor={color}
        onUpdateColor={onUpdateColor}
      ></Button>
    </div>
  );
}
