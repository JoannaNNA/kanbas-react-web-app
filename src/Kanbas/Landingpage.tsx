import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div id="landing-page">
      <h1>Welcome to the Landing Page</h1>
      <p>Developed by Na Zhou - Section 2</p>
      <ul>
        <li><Link to="/Labs">Go to Labs</Link></li>
        <li><Link to="/Kanbas">Sign in Kanbas</Link></li>
      </ul>

      {/* Links to Lab Assignments */}
      <h2>Links to Lab Assignments</h2>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      </ul>

      {/* Link to Kanbas Application */}
      <h2>Kanbas Application</h2>
      <p>
        <Link to="/Kanbas/Dashboard">Go to the Kanbas Dashboard</Link>
      </p>

      {/* GitHub Repositories */}
      <h2>Source Code Repositories</h2>
      <ul>
        <li>
          <a
            href="https://github.com/JoannaNNA/kanbas-react-web-app.git"
            id="wd-github"
          >
            Kanbas Application Source Code
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/JoannaNNA/kanbas-react-web-app/tree/A1"
            id="wd-a1"    
           >
             Assignments 1 Source Code
          </a>
        </li>

        <li>
          <a 
            href="https://github.com/JoannaNNA/kanbas-react-web-app/tree/A2"
            id="wd-a2"    
           >
             Assignments 2 Source Code
          </a>
        </li>

      </ul>
    </div>
  );
};

export default LandingPage;
