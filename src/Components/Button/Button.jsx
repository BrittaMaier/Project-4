import { useState } from "react";
export default function Button({ DeleteColor }) {
  const [display, setDisplay] = useState(false);
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <p
        className="color-card-headline"
        style={{ display: display ? "inline" : "none" }}
      >
        Really delete?
      </p>
      <button
        className="color-card__cancel-delete-button"
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
        hidden={display || visibility}
        onClick={() => setDisplay(true)}
      >
        DELETE
      </button>
      <button
        className="color-card__edit-button"
        type="button"
        title="edit color"
        hidden={display || visibility}
        onClick={() => setVisibility(true)}
      >
        EDIT
      </button>
      <button
        className="color-card__cancel-edit-button"
        type="button"
        title="cancel edit color"
        hidden={!visibility}
        onClick={() => setVisibility(false)}
      >
        CANCEL
      </button>
    </>
  );
}
