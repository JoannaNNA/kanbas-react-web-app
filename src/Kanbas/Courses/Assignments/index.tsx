import { BsGripVertical } from "react-icons/bs";

import ModulesControls from "../Modules/ModulesControls";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
      <div id="wd-assignments">
        <ModulesControls /><br /><br /><br /><br />
          <input id="wd-search-assignment"
                 placeholder="Search for Assignments" />
          <button id="wd-add-assignment-group">+ Group</button>
          <button id="wd-add-assignment">+ Assignment</button>
          <h3 id="wd-assignments-title">
              ASSIGNMENTS 40% of Total <button>+</button>
          </h3>
          <ul id="wd-assignment-list">
              <li className="wd-assignment-list-item">
                  <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/1">
                      <BsGripVertical className="me-2 fs-3" />A1 - ENV + HTML <LessonControlButtons />
                  </a>
                  <p>Multiple Modules | <strong>NOT available until</strong> May 6 at 12:00am | 
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts</p>
              </li>
              <li className="wd-assignment-list-item">
                  <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/2">
                      <BsGripVertical className="me-2 fs-3" />A2 - CSS + BOOTSTRAP<LessonControlButtons />
                  </a>
                  <p>Multiple Modules | <strong>NOT available until</strong> May 13 at 12:00am | 
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts</p>
              </li>
              <li className="wd-assignment-list-item">
                  <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/3">
                      <BsGripVertical className="me-2 fs-3" />A3 - JAVASCRIPT +REACT<LessonControlButtons />
                  </a>
                  <p>Multiple Modules | <strong>NOT available until</strong> May 20 at 12:00am | 
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts</p>
              </li>
          </ul>
      </div>
  );
}
