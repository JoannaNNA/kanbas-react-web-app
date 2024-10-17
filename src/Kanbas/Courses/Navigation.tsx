import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../Database";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "People", path: "People" }
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(link => (
        <Link key={link.path}
          to={link.path}
          id={`wd-course-${link.path.toLowerCase()}-link`}
          className={`list-group-item border border-0 
            ${pathname.includes(link.label) ? "active bg-white text-black" : "bg-white text-danger"}`}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}


//   const { cid } = useParams();
//   return (
//       <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//         {cid}
//         <Link to={`/Kanbas/Courses/${cid}/Home`} id="wd-course-home-link"
//           className="list-group-item active border border-0"> Home </Link>
//         <Link to={`/Kanbas/Courses/${cid}/Modules`} id="wd-course-modules-link"
//           className="list-group-item text-danger border border-0"> Modules </Link>
//         <Link to={`/Kanbas/Courses/${cid}/Piazza`} id="wd-course-piazza-link"
//           className="list-group-item text-danger border border-0"> Piazza </Link>
//         <Link to={`/Kanbas/Courses/${cid}/Zoom`} id="wd-course-zoom-link"
//           className="list-group-item text-danger border border-0"> Zoom </Link>
//         <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-course-assignments-link"
//           className="list-group-item text-danger border border-0"> Assignments </Link>
//         <Link to={`/Kanbas/Courses/${cid}/Quizzes`} id="wd-course-quizzes-link"
//           className="list-group-item text-danger border border-0"> Quizzes </Link>
//         <Link to={`/Kanbas/Courses/${cid}/People`} id="wd-course-people-link"
//           className="list-group-item text-danger border border-0"> People </Link>
//       </div>
//     );
// }
