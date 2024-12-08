import { FaPlus, FaChartLine, FaCompress } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IoEllipsisVertical } from "react-icons/io5";

export default function QuizControls() {
  return (
    
    <div id="wd-assignments-controls" className="container">
    <div className="row align-items-center">
      <div className="col-sm-8 col-md-6">
        <div className="input-group">
          
          <input
            id="wd-search-assignment"
            type="text"
            className="form-control"
            placeholder="Search for Quiz"
          
            
          />
        </div>
      </div>
      
      <div className="col-sm-4 col-md-6 text-end">
      
      

        <button id="wd-add-assignment-btn" className="btn btn-danger ms-2">
          <FaPlus className="me-1" />Quiz
        </button>
      <button id="wd-Group-btn" className="btn btn-secondary ms-1">
      <IoEllipsisVertical className="fs-4" />

        </button>
      </div>
    </div>
  </div>
  );
}