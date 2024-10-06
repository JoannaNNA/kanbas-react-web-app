import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ width: 300 }}>
      <h1>Profile</h1>
      <input id="wd-username" defaultValue="alice" placeholder="username" className="form-control mb-2"/>
      <input id="wd-password" defaultValue="123" placeholder="password" type="password" className="form-control mb-2"/>
      <input id="wd-firstname" defaultValue="Alice" placeholder="First Name" className="form-control mb-2"/>
      <input id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" className="form-control mb-2"/>
      <input id="wd-dob" defaultValue="2000-01-01" type="date" className="form-control mb-2"/>
      <input id="wd-email" defaultValue="alice@wonderland.com" type="email" className="form-control mb-3"/>
      <select id="wd-role" className="form-control mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Signin" 
            className="btn btn-danger w-100">
            Sign out</Link>
    </div>
  );
}
