import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const signin = async () => {
    try {
      if (!credentials.username || !credentials.password) {
        setError("username or password is empty");
        return;
      }
      
      const user = await client.signin(credentials);
      if (user) {
        setError(""); 
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
      }
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError("username or password is incorrect");
      } else {
        setError("login failed, please try again later");
      }
    }
  };

  return (
    <div id="wd-signin-screen" style={{ width: 300 }}>
      <h1>Sign in</h1>
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}
      <input
        defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="form-control mb-2" placeholder="username" id="wd-username" />
      <input
        defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
        <br/>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up</Link>
    </div>
  );
}
