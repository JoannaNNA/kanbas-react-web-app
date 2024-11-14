import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
     
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      Now, on your own, create a module object with string properties id, name, description, and course. Feel free to use values of your choice.
Create a route that responds with the module object, mapped to /lab5/module
In the UI, create a link labeled Get Module that retrieves the module object from the server mapped at /lab5/module
Confirm that clicking the link retrieves the module.
Create another route mapped to /lab5/module/name that retrieves the name of the module created earlier
In the UI, create a hyperlink labeled Get Module Name that retrieves the name of the module object
Confirm that clicking the link retrieves the module's name.
On your own, in WorkingWithObjects.tsx, create a module state variable to test editing the module object on the server. Create an input field where we can type the new module name, and a link that invokes the route that updates the name. Confirm that you can change the module's name. Create routes and a corresponding UI that can modify the score and completed properties of the assignment object. In the React application, create an input field of type number where you can type the new score and an input field of type checkbox where you can select the completed property. Create a link that updates the score and another link that updates the completed property. For the module, create routes and UI to edit the module's description.
 
        </div>
);}
