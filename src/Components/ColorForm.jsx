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
        <input type="text" name="role" id="role" />
        <label>
          Hex
          <input type="text" placeholder="#123456" />
          <input type="color" placeholder="#123456" />
        </label>
        <label>
          Contrast Text
          <input type="text" placeholder="#ffff" />
          <input type="color" placeholder="#ffff" />
        </label>
      </div>
      <div className="color-form__button-wrapper">
        <Button type="submit">ADD COLOR</Button>
      </div>
    </form>
  );
}
