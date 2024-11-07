import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from 'react-redux';

interface ModuleControlButtonsProps {
  moduleId: string;
  editModule: (moduleId: string) => void;
  deleteModule: (moduleId: string) => void;
}

export default function ModuleControlButtons({ 
  moduleId, 
  editModule, 
  deleteModule 
}: ModuleControlButtonsProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="float-end">
      {currentUser?.role === 'FACULTY' && (
        <>
          <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
          <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
        </>
      )}
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
