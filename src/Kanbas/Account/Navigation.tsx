import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
      <ul className="nav nav-pills flex-column mb-auto">
       

        <li>
          <Link to="/Kanbas/Account/Signin" className="nav-link">
            Signin
          </Link>
        </li>

        <li>
          <Link to="/Kanbas/Account/Signup" className="nav-link">
            Signup
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Kanbas/Account/Profile" className="nav-link active"  aria-current="page">
            Profile
          </Link>
        </li>

      </ul>
    </div>
  );
}
