export default function Deletequiz({
    show,
    onHide,
    onConfirm,
  }: {
    show: boolean;
    onHide: () => void;
    onConfirm: () => void;
  }) {
    return (
      <div
        id="wd-delete-assignment-dialog"
        className={`modal fade ${show ? "show d-block" : ""}`}
        style={{ backgroundColor: show ? "rgba(0,0,0,0.5)" : "transparent" }}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Confirm Delete
              </h1>
              <button type="button" className="btn-close" onClick={onHide}></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this quiz?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onHide}>
                No
              </button>
              <button type="button" className="btn btn-danger" onClick={onConfirm}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }