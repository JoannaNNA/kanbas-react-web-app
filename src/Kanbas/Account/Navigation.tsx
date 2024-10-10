import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group d-flex rounded-0 flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
      
          <Link to="/Kanbas/Account/Signin" className="list-group-item active nav-link">
            Signin
          </Link>
      
          <Link to="/Kanbas/Account/Signup" className="nav-link">
            Signup
          </Link>
      
          <Link to="/Kanbas/Account/Profile" className="nav-link"  >
            Profile
          </Link>
     
    </div>
  );
}