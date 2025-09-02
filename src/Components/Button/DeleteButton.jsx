export default function Button({ DeleteColor }) {
  return (
    <>
      <p className="color-card-headline">Really delete?</p>
      <button
        className="button__cancel-button"
        type="button"
        title="cancel delete color"
        onClick={/*toggleDisplaybacktoinitalState*/}
      >
        CANCEL
      </button>
      <button
        className="color-card__confirm-delete-button"
        type="button"
        title="confirm delete color"
        onClick={DeleteColor}
      >
        DELETE 
      </button>
       <button
        className="color-card__delete-button"
        type="button"
        title="delete color"
        onClick={/*toggleDisplay*/}
      >
        DELETE
      </button>
    </>
  );
}
