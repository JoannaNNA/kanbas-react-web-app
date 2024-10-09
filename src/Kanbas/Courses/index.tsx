import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";  // 确保图标的版本号正确
import PeopleTable from "./People/Table";
import { useParams } from 'react-router-dom';

export default function Courses() {
  const { courseId, pageName } = useParams();
  
  return (
    <div id="wd-courses">
      <nav className="navbar navbar-dark bg-dark ">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">  Course 1234</a>

        
        
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Canvas</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Calender</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Inbox</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">History</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>

      
      </div>
    </nav>

    {/* <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn btn-dark dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
                Dropdown
              </button>
              <ul className="dropdown-menu dropdown-menu-dark show" data-bs-popper="static">
                <li><a className="dropdown-item" href="#">Home</a></li>
                <li><a className="dropdown-item" href="#">Modules</a></li>
                <li><a className="dropdown-item" href="#">Piazza</a></li>
                <li><a className="dropdown-item" href="#">Zoom Meeting</a></li>
                <li><a className="dropdown-item" href="#">Piazza</a></li>
                <li><a className="dropdown-item" href="#">Quizzes</a></li>
                <li><a className="dropdown-item" href="#">Grade</a></li>
                <li><a className="dropdown-item" href="#">People</a></li>
                <li><a className="dropdown-item" href="#">Setting</a></li>

              </ul>
            </li>
          </ul>
        </div> */}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
