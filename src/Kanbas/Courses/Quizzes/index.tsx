import { BsGripVertical } from "react-icons/bs";
import QuizControls from "./QuizControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import GreenCheckmark from "./GreenCheckmark";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { IoRocket } from 'react-icons/io5';
import * as assignmentsClient from "./client";
import { deleteAssignment,updateAssignment,editAssignment,addModule } from "./reducer";
export default function Quiz() {
const dispatch = useDispatch();
const { cid } = useParams(); 
const [moduleName, setModuleName] = useState("");
const [assignmentName, setAssignmentName] = useState("");
    const { assignments } = useSelector((state: any) => state.quizReducer);
    const saveModule = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
      };    const removeAssignment = async (assignmentId: string)=>{
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

    const createQuizForCourse = async () => {
        if (!cid) return;
        const newModule = { title: moduleName, course: cid };
        const module = await assignmentsClient.createQuizForCourse(cid, newModule);
        dispatch(addModule(module));
      };

   
    return (
      <div>
      <QuizControls setModuleName={setModuleName} moduleName={moduleName} addModule={createQuizForCourse}/><hr></hr>
      <ul id="wd-assignment" className="list-group rounded-0">

      <li  className="wd-assignments p-3 ps-2 bg-secondary d-flex justify-content-between border align-items-center">
        <h3 className="mb-4 d-flex justify-content-between align-items-center">
        <IoMdArrowDropdown />
        Assignments Quizzes
        </h3>
        
          
        
      </li>
      {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                        
                            <li  key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <IoRocket className="me-1 fs-3" />
                                    <div className="d-flex align-items-center">
                                        <Link
                                            className="wd-assignment-link fw-bold"
                                            to={`/Kanbas/Courses/${cid}/Quizzes`}
                                            //to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        style={{ color: 'black', textDecoration: 'none' }}>
                                    {!assignment.editing && assignment.title}

                                        </Link>
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
               defaultValue={assignment.title}/>
      )} 
                                <GreenCheckmark
                                    assignmentId={assignment._id}
                                    editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))}
                                    deleteAssignment={(assignmentId) => removeAssignment(assignmentId)}
                                />
                            </li>
                        ))}
                        </ul>
      </div>
      );}