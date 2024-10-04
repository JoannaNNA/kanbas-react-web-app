// import { BsGripVertical } from "react-icons/bs";

// import ModulesControls from "../Modules/ModulesControls";
// import LessonControlButtons from "../Modules/LessonControlButtons";

// export default function Assignments() {
//   return (
//       <div id="wd-assignments">
//         <ModulesControls /><br /><br /><br /><br />
//           <input id="wd-search-assignment"
//                  placeholder="Search for Assignments" />
//           <button id="wd-add-assignment-group">+ Group</button>
//           <button id="wd-add-assignment">+ Assignment</button>
//           <h3 id="wd-assignments-title">
//           <BsGripVertical className="me-2 fs-3" />
//            ASSIGNMENTS 
//            40% of Total <button>+</button>
//           </h3>
//           <ul id="wd-assignment-list">
//               <li className="wd-assignment-list-item">
//                   <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/1">
//                       <BsGripVertical className="me-2 fs-3" />A1 - ENV + HTML <LessonControlButtons />
//                   </a>
//                   <p>Multiple Modules | <strong>NOT available until</strong> May 6 at 12:00am | 
//                   <strong>Due</strong> May 13 at 11:59pm | 100 pts</p>
//               </li>
//               <li className="wd-assignment-list-item">
//                   <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/2">
//                       <BsGripVertical className="me-2 fs-3" />A2 - CSS + BOOTSTRAP<LessonControlButtons />
//                   </a>
//                   <p>Multiple Modules | <strong>NOT available until</strong> May 13 at 12:00am | 
//                   <strong>Due</strong> May 20 at 11:59pm | 100 pts</p>
//               </li>
//               <li className="wd-assignment-list-item">
//                   <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/3">
//                       <BsGripVertical className="me-2 fs-3" />A3 - JAVASCRIPT +REACT<LessonControlButtons />
//                   </a>
//                   <p>Multiple Modules | <strong>NOT available until</strong> May 20 at 12:00am | 
//                   <strong>Due</strong> May 27 at 11:59pm | 100 pts</p>
//               </li>
//           </ul>
//       </div>
//   );
// }
// Assignments.js
import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Assignments.css'; // Make sure the CSS path is correct

export default function Assignments() {
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FaSearch /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search for Assignments" />
                </div>
                <div>
                    <button className="btn btn-success ms-2"><FaPlus /> Group</button>
                    <button className="btn btn-primary"><FaPlus /> Assignment</button>
                </div>
            </div>
            <ul className="list-group">
                {["A1 - ENV + HTML", "A2 - CSS + BOOTSTRAP", "A3 - JAVASCRIPT + REACT"].map((assignment, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{assignment}</h5>
                            <p>Multiple Modules | <strong>NOT available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts</p>
                        </div>
                        <Link to={`/Kanbas/Courses/1234/Assignments/${index + 1}`} className="btn btn-link">Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
