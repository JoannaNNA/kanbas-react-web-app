import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="auth-container">
      <h1>Sign Up</h1>
      <input id="wd-new-username" placeholder="username" className="form-control mb-2" />
      <input id="wd-new-password" placeholder="password" type="password" className="form-control mb-3" />
      <button id="wd-signup-btn" className="btn btn-primary w-100 mb-2">Sign Up</button>
      <Link id="wd-signin-link" to="/Kanbas/Account/Signin" className="btn btn-link w-100">Sign in</Link>
    </div>
  );
}
