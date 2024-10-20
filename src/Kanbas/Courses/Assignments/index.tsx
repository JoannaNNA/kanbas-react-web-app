import { BsGripVertical } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import React from 'react';
import { useParams } from "react-router";
import * as db from "../../Database";
import AssignmentsControls from "./AssignmentsControls";
import ModuleControlButtons from '../Modules/ModulesControlButtons';
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === cid);
  console.log("Course ID (cid):", cid);
//   console.log("Assignment ID (assignmentId):", assignmentId);
  console.log("Filtered Assignments:", assignments);
 
  return (
    <div>
    <AssignmentsControls /><br /><br /><br />
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
        <ModuleControlButtons />
      </div>
    </div>
    <ul id="wd-assignments-title" className="wd list-group rounded-0">
      {assignments.map((assignment) => (
       <li key={assignment._id} className="wd-assignment list-group-item p-0  fs-5">       
          <div className="wd-task p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <BsGripVertical className="me-2 fs-3" />
              <MdEditDocument />
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} style={{ margin: '0 1rem' }}>
                  {assignment.title}
                </a>
                <p style={{ margin: '0 1rem', color: 'black', fontSize: '0.9em' }}>
                  <span style={{ color: 'red' }}>Multiple Modules</span> | 
                  {assignment.start_date && <strong> NOT available until {assignment.start_date}</strong>} |
                  {assignment.due_date && <strong> Due {assignment.due_date}</strong>} | {assignment.points} Points
                </p> 
              </div>
            </div>
            <LessonControlButtons />
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}