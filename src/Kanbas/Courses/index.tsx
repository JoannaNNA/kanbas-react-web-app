import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { courses } from "../Database";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa6";
import * as db from "../Database";

import { TfiDashboard } from "react-icons/tfi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { PiTreeStructureFill } from "react-icons/pi";
import { GoPlug } from "react-icons/go";
import { MdOutlineAssignment } from "react-icons/md";
import { GiJetpack } from "react-icons/gi";
import { MdPeopleOutline } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
export default function Courses() {
  const { cid } = useParams();
  // const parameters = useParams();   show {/* {JSON.stringify(parameters)} */}
  const course = courses.find((course) => course._id === cid); //course id
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      
           
          <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">
              <h2 className="navbar-brand-white text-danger text-start ">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
              </h2>
              <h2 className="navbar-brand-black text-danger align-items-center justify-content-center ">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} <br/> {pathname.split("/")[4]}
              </h2>


              {/* {JSON.stringify(course,null,3)} debug */}
              </a>

                  <li className="nav-item dropdown me-5">
                    <button className="btn dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark show" data-bs-popper="static">
                      <li><a className="dropdown-item text-danger" href="/Kanbas/Courses/Home"><TiHomeOutline />Home</a></li>
                      <li><a className="dropdown-item text-danger" href="/Kanbas/Courses/Modules"><PiTreeStructureFill />Modules</a></li>
                      <li><a className="dropdown-item text-danger" href="#"><GoPlug />Piazza</a></li>
                      <li><a className="dropdown-item text-danger" href="#"><GoPlug />Zoom Meeting</a></li>
                      <li><a className="dropdown-item text-danger" href="#"><MdOutlineAssignment />Piazza</a></li>
                      <li><a className="dropdown-item text-danger" href="#"><GiJetpack />Quizzes</a></li>
                      <li><a className="dropdown-item text-danger" href="#"><MdMenuBook />Grade</a></li>
                      <li><a className="dropdown-item text-danger" href="/Kanbas/Courses/People"><MdPeopleOutline />People</a></li>
                      <li><a className="dropdown-item text-danger" href="#"><CiSettings />Setting</a></li>

                    </ul>
                  </li>
               
            
              <div id="offcanvasNavbar" className="offcanvas offcanvas-end text-danger" tabIndex={-1}  aria-labelledby="offcanvasNavbarLabel"style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300px', 
                    height: '400px', 
                  }}>
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <img src="/images/canvas_logo.jpg" width="100%" height={60} alt="Canvas Logo" />
                 </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link" href="/Kanbas/Dashboard"><TfiDashboard />Dashbord</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Kanbas/Account"><MdOutlineAccountCircle />Account</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Kanbas/Courses"><FaBook />Courses</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Kanbas/Calender"><SlCalender />Calender</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Kanbas/Inbox"><HiMiniInboxArrowDown />Inbox</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><FaRegClock />History</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><FaRegCircleQuestion />Help</a>
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
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
