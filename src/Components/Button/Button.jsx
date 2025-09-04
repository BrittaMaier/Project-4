import { useState } from "react";
import ColorForm from "../ColorForm";
export default function Button({ onDeleteColor, currentColor, onUpdateColor }) {
  const [display, setDisplay] = useState("default");
  return (
    <>
      {display === "default" && (
        <>
          <button
            className="color-card__delete-button"
            type="button"
            title="delete color"
            onClick={() => setDisplay("delete")}
          >
            DELETE
          </button>
          <button
            className="color-card__edit-button"
            type="button"
            title="edit color"
            onClick={() => setDisplay("edit")}
          >
            EDIT
          </button>
        </>
      )}
      {display === "delete" && (
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
            onClick={() => setDisplay("default")}
          >
            CANCEL
          </button>
          <button
            className="color-card__confirm-delete-button"
            type="button"
            title="confirm delete color"
            onClick={onDeleteColor}
          >
            DELETE
          </button>
        </>
      )}
      {display === "edit" && (
        <>
          {" "}
          <ColorForm
            buttonText="UPDATE COLOR"
            defaultValues={currentColor}
            onAddColor={(updates) => {
              onUpdateColor(currentColor.id, updates);
              setDisplay("default");
            }}
          ></ColorForm>
          <button
            className="color-card__cancel-edit-button"
            type="button"
            title="cancel edit color"
            onClick={() => setDisplay("default")}
          >
            CANCEL
          </button>
        </>
      )}
    </>
  );
}
