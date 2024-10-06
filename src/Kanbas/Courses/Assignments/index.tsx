
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
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 ">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center"> 
  <h3 className="m-0 d-flex align-items-center">
    <BsGripVertical className="me-2 fs-3" />
    <MdEditDocument style={{ marginRight: '1rem' }}/>
    Assignment Week 1 
  </h3>
  <div className="d-flex align-items-center">
    <p className="mb-0 me-3 bg-light p-2 rounded" style={{  maxWidth: '120px', whiteSpace: 'nowrap' }}>
      40% of Total
    </p>
    <ModuleControlButtons />
    {/* <button className="btn btn-link ms-2">+</button> */}
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