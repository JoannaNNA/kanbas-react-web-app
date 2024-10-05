import {Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signout";

export default function Account() {
    return (
      <div id="wd-account-screen">
        
       <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
         

              <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="Signin" element={<Signin />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
              </Routes>

          </td>
        </tr>
      </table>
      </div>
  );}
  
