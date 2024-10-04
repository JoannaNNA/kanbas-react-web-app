<<<<<<< HEAD
import React from 'react';
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "../Modules/ModulesControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from '../Modules/ModulesControlButtons';
import { CiSearch } from 'react-icons/ci';
import { MdEditDocument } from "react-icons/md";

export default function Assignments() {
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center"> 
  <h3 className="m-0 d-flex align-items-center">
    <BsGripVertical className="me-2 fs-3" />
    <MdEditDocument style={{ marginRight: '1rem' }}/>
    Assignment Week 1 
  </h3>
  <div className="d-flex align-items-center">
    <p className="mb-0 me-3 bg-light p-2 rounded" style={{ border: '1px solid blue', maxWidth: '120px', whiteSpace: 'nowrap' }}>
      40% of Total
    </p>
    <ModuleControlButtons />
    <button className="btn btn-link ms-2">+</button>
  </div>
</div>

          <ul className="wd-tasks list-group rounded-0">
          <li className="wd-task list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <BsGripVertical className="me-2 fs-3" />
                    <MdEditDocument />
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/1" style={{ margin: '0 1rem' }}>
                        A1 - ENV + HTML
                    </a>
                    <p style={{ margin: '0 1rem', color: 'gray', fontSize: '0.9em' }}>
                        <span style={{ color: 'red' }}>Multiple Modules</span> | 
                        <strong>NOT available until</strong> May 6 at 12:00am | 
                        <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </p>
                    </div>
                </div>
                <LessonControlButtons />
                </li>

                <li className="wd-task list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <BsGripVertical className="me-2 fs-3" />
                    <MdEditDocument />
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/1" style={{ margin: '0 1rem' }}>
                    A2 - CSS + BOOTSTRAP
                    </a>
                    <p style={{ margin: '0 1rem' }}><span style={{ color: 'red' }}>Multiple Modules</span> | <strong>NOT available until</strong> May 13 at 12:00am | 
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts</p> 
                    </div>
                </div>
                <LessonControlButtons />
                </li>

                <li className="wd-task list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <BsGripVertical className="me-2 fs-3" />
                    <MdEditDocument />
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/1"style={{ margin: '0 1rem' }}>
                    A3 - JAVASCRIPT +REACT
                    </a>
                    <p style={{ margin: '0 1rem' }}>
                    <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>NOT available until</strong> May 20 at 12:00am | 
                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </p>
                </div>
                </div>
                <LessonControlButtons />
                </li>

          </ul>
        </li>
        
        
        
      </ul>
    </div>
  );
}
=======
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
>>>>>>> 12237f2cf6679e7c68398eccde0343d72da5bb2a
