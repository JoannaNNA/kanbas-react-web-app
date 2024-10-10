import { FaPlus, FaChartLine, FaCompress } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { AiOutlineStop } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
         Module
      </button>
     
      <div id="wd-modules-dropdwn"className="modules-dropdown d-inline me-1 float-end">
        <button id="dropdownMenuButton" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items-btn" className="dropdown-item" href="#">
            <AiOutlineStop />
              Unpublish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only-btn" className="dropdown-item" href="#">
            <AiOutlineStop />
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>

      
      <button id="wd-view-progress-btn" className="btn btn-lg btn-secondary me-1 float-end">
       
        View Progress
      </button>
      <button id="wd-collapse-all-btn" className="btn btn-lg btn-secondary me-1 float-end">
       
        Collapse All
      </button>
    </div>
  );
}
