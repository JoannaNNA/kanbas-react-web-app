import { Routes, Route, Navigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import Signin from "./Account/Signin"; 
import LandingPage from "./Landingpage";

export default function Kanbas() {
  return (
    <>
      <div id="wd-kanbas">
        <h1>Kanbas</h1>
        {/* Add a link to navigate back to the Landing Page */}
        <p>
          <Link to="/Landingpage">Back to Landing Page</Link> {/* Link added here */}
        </p>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <KanbasNavigation />
              </td>
              <td valign="top">
                <Routes>
                  {/* Redirect root to the account (landing) page */}
                  <Route path="/" element={<Navigate to="/Kanbas/Account" />} />

                  {/* Account route as the landing page */}
                  <Route path="/Account" element={<Account />} />

                  {/* Signin page route under Account */}
                  <Route path="/Account/Signin" element={<Signin />} />

                  {/* Other routes */}
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Courses/:cid/*" element={<Courses />} />
                  <Route path="/Calendar" element={<h1>Calendar</h1>} />
                  <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
