import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import Landingpage from "./Kanbas/Landingpage";
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



