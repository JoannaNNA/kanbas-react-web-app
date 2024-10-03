import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/Python.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5001 Python
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Python For Beginners
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
            </div>
            
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/AI.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5002 AI
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Making AI helpful for everyone
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
            </div>
            
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/algorithms.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5003 Algorithms
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Introduction to Algorithms
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
            </div>
            
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/C.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5004 Introduction to C
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                     Learn C Programming
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
            </div>
            
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/JAVA.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5005 JAVA
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                    Java is a high-level, class-based, object-oriented programming language
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
            </div>
            
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/JS.png" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5006 JavaScript PRO
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      JavaScript Introduction
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
            </div>
            
          </div>
        </div>
  </div></div>

);
}
