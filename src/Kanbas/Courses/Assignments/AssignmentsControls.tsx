import { FaPlus, FaChartLine, FaCompress } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as client from "./client";

interface AssignmentsControlsProps {
  setAssignmentName: (name: string) => void;
  assignmentName: string;
  addAssignment: (assignment: any) => void;
}

const AssignmentsControls: React.FC<AssignmentsControlsProps> = ({ 
  setAssignmentName, 
  assignmentName, 
  addAssignment 
}) => {
  const { cid } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const handleAddAssignment = async () => {
    if (cid) {
      const newAssignment = {
        title: assignmentName,
        course: cid,
        points: 100,
        description: "",
      };
      const created = await client.createAssignment(cid, newAssignment);
      addAssignment(created);
      setAssignmentName("");
    }
  };

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
        {currentUser?.role === 'FACULTY' && (
          <>
            <button 
              id="wd-add-assignment-btn" 
              className="btn btn-danger ms-2" 
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
            >
              <FaPlus className="me-2" />Assignment
            </button>
          </>
        )}
      </div>
    </div>
  </div>
  );
};

export default AssignmentsControls;
