import ColorInput from "./Color/ColorInput";
export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor({
      role: data.role,
      hex: data.hex,
      contrastText: data.contrastText,
    });
  }
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <div className="color-form__field">
        <label htmlFor="role">Role</label>
        <br />
        <input type="text" name="role" id="role" defaultValue="some color" />
        <br />
        <label>
          Hex
          <br />
          <ColorInput name="hex" defaultValue="#123456" />
        </label>
        <br />
        <label>
          Contrast Text
          <br />
          <ColorInput name="contrastText" defaultValue="#FFFFFF" />
        </label>
      </div>
      <div className="color-form__button-wrapper">
        <button type="submit" className="button">
          ADD COLOR
        </button>
      </div>
    </form>
  );
}
