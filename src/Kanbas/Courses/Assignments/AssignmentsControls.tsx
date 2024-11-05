import { FaPlus, FaChartLine, FaCompress } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NewAssignmentEditor from "./NewAssignmentEditor";

export default function AssignmentsControls({ assignmentName, setAssignmentName, addAssignment }:
  { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }) 
  {
  return (
    
    <div id="wd-assignments-controls" className="container">
    <div className="row align-items-center">
      <div className="col-sm-8 col-md-6">
        <div className="input-group">
          <button className="btn btn-outline-secondary" type="button" id="button-addon1">
            <CiSearch />
          </button>
          <input
            id="wd-search-assignment"
            type="text"
            className="form-control"
            placeholder="Search..."
          
            
          />
        </div>
      </div>
      
      <div className="col-sm-4 col-md-6 text-end">
      <button id="wd-Group-btn" className="btn btn-secondary ms-2">
          <FaPlus className="me-2" />Group
        </button>
        <button id="wd-add-assignment-btn" className="btn btn-danger ms-2" data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog" >
          
          <FaPlus className="me-2" />Assignment
        </button>
        <NewAssignmentEditor dialogTitle="Add Module" assignmentName={assignmentName}
                    setAssignmentName={setAssignmentName} addAssignment={addAssignment} />

      </div>
    </div>
  </div>
  );
}
