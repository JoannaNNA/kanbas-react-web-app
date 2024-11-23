import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModulesControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import React, { useState,useEffect } from "react";
import {setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
     };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div id="wd-modules" style={{ marginTop: '3rem' }}>
      <div>
        <ModulesControls 
          setModuleName={setModuleName} 
          moduleName={moduleName}
          addModule={ createModuleForCourse}/>
      
        <br /><br /><br /><br />
      </div>

      <ul id="wd-modules-body" className="list-group rounded-0">
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />  
              {!module.editing && module.name}
              { module.editing && (
                <input className="form-control w-50 d-inline-block"
                      onChange={(e) =>   
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...module, editing: false });
                          // dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}/>
              )}
              <ModuleControlButtons 
                moduleId={module._id}
                deleteModule={(moduleId) => removeModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> 
                    {lesson.name} 
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


// export default function Modules() {
//   // Get course ID from the URL
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const dispatch = useDispatch();
//   const userRole = useSelector((state: any) => state.user.role)

//   return (
//     <div id="wd-modules"  style={{ marginTop: '3rem' }} >
//       {userRole === 'FACULTY' && (
//       <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
//           dispatch(addModule({ name: moduleName, course: cid }));
//           setModuleName("");
//         }}/>  )}<br /><br /><br /><br />

//       <ul id="wd-modules-body" className="list-group rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />  
//               {!module.editing && module.name}
//               {module.editing ? (
//                   userRole === 'FACULTY' ? (
//                 <input className="form-control w-50 d-inline-block"
//                       onChange={(e) =>   dispatch(updateModule({ ...module, name: e.target.value })
//                         )
//                       }
//                       onKeyDown={(e) => {if (e.key === "Enter") { dispatch(updateModule({ ...module, editing: false }));
//                         }
//                       }}
//                       defaultValue={module.name}/>
//                     ) : (
//                       module.name
//                     )
//                   ) : module.name}
//               {userRole === 'FACULTY' && (
//               <ModuleControlButtons 
//                 moduleId={module._id}
//                 deleteModule={(moduleId) => {
//                   dispatch(deleteModule(moduleId));
//                 }}
//               editModule={(moduleId) => dispatch(editModule(moduleId))} 
//               userRole={userRole} 
//               />
//             )}
//             </div>
//             {module.lessons && (
//               <ul className="wd-lessons list-group rounded-0">
//                 {module.lessons.map((lesson: any) => (
//                   <li className="wd-lesson list-group-item p-3 ps-1">
//                     <BsGripVertical className="me-2 fs-3" /> {lesson.name} {userRole === 'FACULTY' && <LessonControlButtons />}
//                   </li>

//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }





// export default function Modules() {
//   const { cid } = useParams();
//   const modules = db.modules;
//     return (
//       <div>
//         <ModulesControls /><br /><br /><br /><br />
//         /* <ul id="wd-modules" className="list-group rounded-0">
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />
//               Week 1
//               <ModuleControlButtons />
          

//             </div>
//             <ul className="wd-lessons list-group rounded-0">
//               <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES 
//               <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               Introduction to the course  <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               Learn what is Web Development  <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1"> 
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1  <LessonControlButtons /></li>
//               <li className="wd-lesson list-group-item p-3 ps-1"> 
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2  <LessonControlButtons /></li>
//             </ul>
//           </li>
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />
//               Week 2
//               <ModuleControlButtons />
//             </div>
//             <ul className="wd-lessons list-group rounded-0">
//               <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES  
//               <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1"> 
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1  <LessonControlButtons /></li>
//               <li className="wd-lesson list-group-item p-3 ps-1"> 
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2  <LessonControlButtons /></li>
//             </ul>
//           </li>
//         </ul> </div>

//   );}
//    */