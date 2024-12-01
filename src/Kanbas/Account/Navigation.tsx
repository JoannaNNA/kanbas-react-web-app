import { link } from "fs";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser
  ? [{ path: "/Kanbas/Account/Profile", label: "Profile" }]
  : [
      { path: "/Kanbas/Account/Signin", label: "Signin" },
      { path: "/Kanbas/Account/Signup", label: "Signup" }
    ];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0" style={{width: "280px"}}>
      {links.map(link => (
         <Link key={link.path} to={link.path}
         className={`list-group-item border border-0 
           ${pathname.includes(link.label) ? "active bg-white text-black" : "bg-white text-danger"}`}>
         {link.label}
       </Link>
      ))}
{currentUser && currentUser.role === "ADMIN" && (
  <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
   

  
  );
}



// <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0" style={{width: "280px"}}>
      
// <Link to="/Kanbas/Account/Signin" className="list-group-item active border border-0">
//   Signin
// </Link>

// <Link to="/Kanbas/Account/Signup" className="list-group-item text-danger border border-0 ">
//   Signup
// </Link>

// <Link to="/Kanbas/Account/Profile" className="list-group-item text-danger border border-0"  >
//   Profile
// </Link>

// </div>