import { BsGripVertical } from "react-icons/bs";
import QuizControls from "./QuizControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import GreenCheckmark from "./GreenCheckmark";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { IoRocket } from 'react-icons/io5';
import * as assignmentsClient from "./client";
import { addAssignment,deleteAssignment,updateAssignment,editAssignment } from "./reducer";
export default function Quiz() {
const dispatch = useDispatch();
const { cid } = useParams(); 
const [assignmentName, setAssignmentName] = useState("");
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const saveModule = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
      };    const removeAssignment = async (assignmentId: string)=>{
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };


   
    return (
      <div>
      <QuizControls /><hr></hr>
      <div className="wd-assignments p-3 ps-2 bg-light d-flex justify-content-between border align-items-center">
        <h3 className="m-0 d-flex align-items-center">
        <IoMdArrowDropdown />
        Assignments Quizzes
        </h3>
        
          
        
      </div>
      {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                        
                            <li  className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <IoRocket className="me-1 fs-3" />
                                    <div className="d-flex flex-column">
                                        <Link
                                            className="wd-assignment-link fw-bold"
                                            to={`/Kanbas/Courses/${cid}/Quizzs`}
                                            //to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        style={{ color: 'black', textDecoration: 'none' }}>

                                        </Link>
                                        <p className="text-muted mb-0 small">Due Sep 19 at 11:59pm | 100 pts</p>
                                    </div>
                                </div>
                                
                                { assignment.editing && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) => dispatch(updateAssignment({ ...assignment, title: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  saveModule({ ...assignment, editing: false });
                }
               }}
               defaultValue={"quiz"}/>
      )} 
                                <GreenCheckmark
                                    assignmentId={assignment._id}
                                    editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))}
                                    deleteAssignment={(assignmentId) => removeAssignment(assignmentId)}
                                />
                            </li>
                        ))}
      </div>
      );}