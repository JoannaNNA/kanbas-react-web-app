import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-3">Sign in</h1>
          <form>
            <div className="mb-3">
              <input id="wd-username"
                     placeholder="Username"
                     className="form-control"
                     type="text" />
            </div>
            <div className="mb-3">
              <input id="wd-password"
                     placeholder="Password"
                     className="form-control"
                     type="password" />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">Sign in</button>
          </form>
          <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="btn btn-link w-100">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
