import { BsGripVertical, BsPlus } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as client from "./client";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import AssignmentControlButtons from "./AssignmentCoutrolButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { title } from "process";
import { Modal, Button } from "react-bootstrap";

interface Assignment {
  _id: string;
  title: string;
  start_date?: string;
  due_date?: string;
  points?: number;
  course?: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [assignmentName, setAssignmentName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [assignments, setAssignments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const fetchAssignments = async () => {
    if (cid) {
      const assignments = await client.findAssignmentsForCourse(cid);
      setAssignments(assignments);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const handleEdit = (assignment: Assignment) => {
    setEditingId(assignment._id);
    setAssignmentName(assignment.title);
  };

  const handleUpdate = async () => {
    if (editingId && cid) {
      await client.updateAssignment(editingId, {
        title: assignmentName,
        course: cid
      });
      setEditingId(null);
      setAssignmentName('');
      fetchAssignments();
    }
  };

  const handleDeleteClick = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (assignmentToDelete) {
      await client.deleteAssignment(assignmentToDelete);
      setShowDeleteModal(false);
      setAssignmentToDelete(null);
      fetchAssignments();
    }
  };

  return (
    <div>
      <br />
    <AssignmentsControls 
      setAssignmentName={setAssignmentName} 
      assignmentName={assignmentName} 
      addAssignment={(assignment: any) => {
        dispatch(addAssignment({ 
          title: assignment.title,
          description: assignment.description,
          points: assignment.points,
          start_date: assignment.start_date,
          due_date: assignment.due_date,
          end_date: assignment.end_date,
          course: cid 
        }));
      }} 
    />
    <br /><br />
    <div className="wd-assignments p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
      <h3 className="m-0 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <MdEditDocument style={{ marginRight: '1rem' }} />
          Assignments
      </h3>
      <div className="d-flex align-items-center">
        <p className="mb-0 me-3 bg-light p-2 rounded" style={{ maxWidth: '120px', whiteSpace: 'nowrap' }}>
          40% of Total
        </p>
        <div className="float-end">
          <GreenCheckmark />
          <BsPlus className="fs-1" />
          <IoEllipsisVertical className="fs-4" />
        </div>

      </div>
    </div>
    <ul id="wd-assignments-title" className="wd list-group rounded-0">
      {assignments
        .filter((assignment: Assignment) => assignment.course === cid)
        .map((assignment: Assignment) => (
          <li key={assignment._id} className="wd-assignment list-group-item p-0 fs-5">
            <div className="wd-task p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {editingId === assignment._id ? (
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <input 
                    className="form-control w-50 d-inline-block"
                    value={assignmentName}
                    onChange={(e) => setAssignmentName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUpdate();
                      }
                    }}
                    autoFocus
                  />
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEditDocument />
                  <div style={{ margin: '0 1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                      {assignment.title}
                    </a>
                    <p style={{ color: 'black', fontSize: '0.9em' }}>
                      <span style={{ color: 'red' }}>Multiple Modules</span> | 
                      {assignment.start_date && <strong> NOT available until {assignment.start_date}</strong>} |
                      {assignment.due_date && <strong> Due {assignment.due_date}</strong>} | 
                      {assignment.points} Points
                    </p> 
                  </div>
                </div>
              )}
              <AssignmentControlButtons 
                assignmentId={assignment._id} 
                onEdit={() => handleEdit(assignment)}
                deleteAssignment={() => handleDeleteClick(assignment._id)}
              />
            </div>
          </li>
        ))}
    </ul>

    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this assignment?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);
}