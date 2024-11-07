import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaPencil } from "react-icons/fa6";

export default function AssignmentControlButtons(
  { assignmentId, deleteAssignment, onEdit }: { 
    assignmentId: string; 
    deleteAssignment: (assignmentId: string) => void;
    onEdit: () => void;
  }
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="float-end">
      {currentUser?.role === 'FACULTY' && (
        <>
          <FaPencil 
            onClick={onEdit}
            className="text-primary me-3"
            style={{ cursor: 'pointer' }}
          />
          <FaTrash 
            className="text-danger me-2 mb-1"
            onClick={() => deleteAssignment(assignmentId)}
            style={{ cursor: 'pointer' }}
          />
        </>
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}