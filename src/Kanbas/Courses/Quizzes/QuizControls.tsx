import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import ModuleEditor from "./Addquiz";

interface QuizControlsProps {
  moduleName: string;
  setModuleName: (name: string) => void;
  addQuiz: () => void;
}

export default function QuizControls({ 
  moduleName, 
  setModuleName, 
  addQuiz 
}: QuizControlsProps) {
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
          <button 
            id="wd-add-module-btn" 
            className="btn btn-danger ms-1" 
            data-bs-toggle="modal" 
            data-bs-target="#wd-add-module-dialog"
          >
            <FaPlus className="position-relative" style={{ bottom: "1px" }} />
            Quiz
          </button>
          
          <ModuleEditor 
            dialogTitle="Add Quiz" 
            moduleName={moduleName}
            setModuleName={setModuleName} 
            addModule={addQuiz}
          />
          
          <button id="wd-Group-btn" className="btn btn-secondary ms-1">
            <IoEllipsisVertical className="fs-4" />
          </button>
        </div>
      </div>
    </div>
  );
}