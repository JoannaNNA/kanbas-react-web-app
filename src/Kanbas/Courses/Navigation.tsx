import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../Database"; // Assuming courses are fetched from here

export default function CoursesNavigation() {
  // Get courseId from the URL parameters
  const { courseId } = useParams();
  const { pathname } = useLocation();

  // Find the current course based on the courseId
  const course = db.courses.find(c => c._id === courseId);

  // Define navigation links based on the courseId
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${courseId}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${courseId}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${courseId}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${courseId}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${courseId}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${courseId}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${courseId}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${courseId}/People` }
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map(link => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item border border-0 
            ${pathname.includes(link.label) ? "active bg-white text-black" : "bg-white text-danger"}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}




//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
//         className="list-group-item active border border-0"> Home </Link>
//       <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
//         className="list-group-item text-danger border border-0"> Modules </Link>
//       <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
//         className="list-group-item text-danger border border-0"> Piazza </Link>
//       <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
//         className="list-group-item text-danger border border-0"> Zoom </Link>
//       <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
//         className="list-group-item text-danger border border-0"> Assignments </Link>
//       <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
//         className="list-group-item text-danger border border-0"> Quizzes </Link>
//       <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
//         className="list-group-item text-danger border border-0" > People </Link>
//     </div>
