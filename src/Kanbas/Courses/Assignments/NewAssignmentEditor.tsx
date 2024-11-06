import * as bootstrap from 'bootstrap';
import React, { useState } from 'react';

export default function NewAssignmentEditor({ 
  dialogTitle, 
  assignmentName,
  setAssignmentName,
  addAssignment,
  navigate
}: {
  dialogTitle: string;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  addAssignment: (assignment: any) => void;
  navigate: (path: string) => void;
}) {
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("100");
  const [dueDate, setDueDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = () => {
    const newAssignment = {
      title: assignmentName,
      description: description,
      points: parseInt(points),
      due_date: dueDate,
      start_date: startDate,
      end_date: endDate
    };
    addAssignment(newAssignment);
    const modalElement = document.getElementById('wd-add-assignment-dialog');
    const modal = bootstrap.Modal.getInstance(modalElement as Element);
    if (modal) {
      modal.hide();
      modalElement?.addEventListener('hidden.bs.modal', () => {
        navigate('../assignments');
      }, { once: true });
    }
  };

  const handleCancel = () => {
    navigate("../");
  };

  return (
    <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle} </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <div className="mb-4">
             
              <input
                className="form-control"
                value={assignmentName}
                onChange={(e) => setAssignmentName(e.target.value)}
                placeholder="New Assignment Name"
              />
            </div>
            <div className="mb-4">
            
              <textarea
                className="form-control"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="New Assignment Description"
              />
            </div>
            <div className="container p-0">
              <div className="row justify-content-end">
                <div className="col-10">
                  <div className="mb-4 d-flex">
                    <label htmlFor="wd-points" className="form-label pe-2 align-self-center">Points:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={points}
                      onChange={(e) => setPoints(e.target.value)}
                      placeholder="100"
                    />
                  </div>
                  <div className="mb-2 d-flex">
                    <label htmlFor="wd-submission-type" className="form-label pe-2 align-self-start">Assign:</label>
                    <div className="flex-grow-1" style={{ border: '1px solid #ccc', padding: '10px' }}>
                      <div className="mb-3">
                        <label className="d-flex justify-content-between">Due:</label>
                        <input
                          type="date"
                          className="form-control"
                          value={dueDate}
                          onChange={(e) => setDueDate(e.target.value)}
                        />
                      </div>

                      <div className="row">
                        <div className="col-12 mb-1">
                          <div className="d-flex justify-content-between">
                            <label>Available From:</label>
                            <label style={{ marginRight: "6rem" }}>Until:</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-6">
                              <input
                                type="date"
                                className="form-control"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                              />
                            </div>
                            <div className="col-6">
                              <input
                                type="date"
                                className="form-control"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={handleSave}>
              Add Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
    