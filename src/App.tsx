import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import Landingpage from "./Kanbas/Landingpage";
import Lab1 from "./Labs/Lab1";  
import TOC from "./Labs/TOC";   
import Lab2 from "./Labs/Lab2";  
import Lab3 from "./Labs/Lab3";  
import Inbox from "./Kanbas/Inbox";
import Courses from "./Kanbas/Courses";
import Modules from "./Kanbas/Courses/Modules";
import store from "./Kanbas/store";
import { Provider } from "react-redux";export default function App() {
 return (
  <HashRouter>
     <Provider store={store}>
   <div>
    <Routes>
      {/* Redirect root to the landing page */}
     <Route path="/" element={<Navigate to="/Landingpage" />} />
     {/* Routes */}
     <Route path="/Landingpage/*" element={<Landingpage />} />
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />

    </Routes>
   </div>
   </Provider>
  </HashRouter>
);
}



