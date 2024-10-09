import CoursesNavigation from "./Navigation";
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; 
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";  
import PeopleTable from "./People/Table";
import { useParams } from 'react-router-dom';

export default function Courses() {
  const { courseId, pageName } = useParams();
  
  return (
    <div id="wd-courses">
      <nav className="navbar navbar">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand me-auto ms-3" href="#">  Course 1234</a>
        
        <button   className=" btn btn-dark dropdown-toggle show d-md-none" data-bs-toggle="dropdown" aria-expanded="true">
        </button>
        <ul className="dropdown-menu show" data-bs-popper="static">
                <li><a className="dropdown-item"  href="/Home">Home</a></li>
                <li><a className="dropdown-item" href="/Modules">Modules</a></li>
                <li><a className="dropdown-item" href="/Assignments">Assignments</a></li>
              </ul>
       

        
        
        <div className="offcanvas offcanvas-end text-danger" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{top: '50%',left: '50%',
                      transform: 'translate(-50%, -50%)', width: '300px', height: '400px', }}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Canvas</h5>
            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
