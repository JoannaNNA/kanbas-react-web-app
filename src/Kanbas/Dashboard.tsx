import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router-dom";
import * as db from "./Database"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
    const [showAllCourses, setShowAllCourses] = useState(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const dispatch = useDispatch();
  
    const isEnrolled = (courseId: string) => {
      return enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id &&
          enrollment.course === courseId
      );
    };

    const handleEnroll = (courseId: string) => {
      dispatch({
        type: "enroll",
        enrollment: {
          user: currentUser._id,
          course: courseId,
        },
      });
    };

    const handleUnenroll = (courseId: string) => {
      dispatch({
        type: "unenroll",
        enrollment: {
          user: currentUser._id,
          course: courseId,
        },
      });
    };
  
  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Dashboard</h1>
        {currentUser.role === 'STUDENT' && (
          <button 
            className="btn btn-primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? 'Show My Enrollments' : 'Show All Courses'}
          </button>
        )}
      </div>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click"> Update</button>
      </h5><hr /><br />
      <input    value={course.name} className="form-control mb-2" 
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <textarea value={course.description} className="form-control"  
          onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => {
              if (currentUser.role !== 'STUDENT') {
                return isEnrolled(course._id);
              }
              return showAllCourses ? true : isEnrolled(course._id);
            })
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link 
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    onClick={(e) => {
                      if (currentUser.role === 'STUDENT' && !isEnrolled(course._id)) {
                        e.preventDefault();
                        alert('You must be enrolled in this course to access it.');
                      }
                    }}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src={course.image} alt={`Image for ${course.name}`} width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <div>
                        {currentUser.role === 'STUDENT' && (
                          <button
                            className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'}`}
                            onClick={(e) => {
                              e.preventDefault();
                              isEnrolled(course._id) 
                                ? handleUnenroll(course._id)
                                : handleEnroll(course._id);
                            }}
                          >
                            {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                          </button>
                        )}
                        {currentUser.role === 'FACULTY' && (
                          <div>
                            <button className="btn btn-primary">
                              <MdEditDocument/>
                            </button>
                            <button onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                              Delete
                            </button>
                            <button id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning float-end me-2">
                              Edit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
);}

