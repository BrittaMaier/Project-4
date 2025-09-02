import { useState } from "react";
export default function Button({ DeleteColor }) {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <p
        className="color-card-headline"
        style={{ display: display ? "inline" : "none" }}
      >
        Really delete?
      </p>
      <button
        className="button__cancel-button"
        type="button"
        title="cancel delete color"
        hidden={!display}
        onClick={() => setDisplay(false)}
      >
        CANCEL
      </button>
      <button
        className="color-card__confirm-delete-button"
        type="button"
        title="confirm delete color"
        hidden={!display}
        onClick={DeleteColor}
      >
        DELETE
      </button>
      <button
        className="color-card__delete-button"
        type="button"
        title="delete color"
        hidden={!!display}
        onClick={() => setDisplay(true)}
      >
        DELETE
      </button>
    </>
  );
}
