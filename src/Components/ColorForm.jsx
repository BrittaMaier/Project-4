export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
    event.target.reset();
  }
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <div className="color-form__field">
        <label htmlFor="role">Role</label>
        <input type="text" name="role" id="role" placeholder="some color" />
        <label>
          Hex
          <input type="text" name="hex" placeholder="#123456" />
          <input type="color" name="hexColor" placeholder="#123456" />
        </label>
        <label>
          Contrast Text
          <input type="text" name="contrastText" placeholder="#ffff" />
          <input type="color" name="constrastColor" placeholder="#ffff" />
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
