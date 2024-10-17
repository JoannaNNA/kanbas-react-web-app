import React from 'react';
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "../Modules/ModulesControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from '../Modules/ModulesControlButtons';
import { CiSearch } from 'react-icons/ci';
import { useParams } from 'react-router';
import * as db from "../../Database";
export default function AssignmentEditor() {
    const { cid } = useParams();
    const assignments = db.assignments.filter(assignment => assignment.course === cid);

    return (
        <div id="wd-assignments-editor" className="container mt-3">
            {assignments.map((assignment) =>
            <div key={assignment._id}>

                <div className="mb-4">
                    <label htmlFor="wd-assignments-name" className="form-label">Assignment Name</label>
                    <input id="wd-assignments-nameinput" type="text" className="form-control" value={assignment.title} />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="wd-description" className="form-label"></label>
                    <textarea id="wd-description" className="form-control" rows={4} value={assignment.description} >
                    
                    </textarea>
                </div>

                {/* Other inputs aligned and styled similarly */}
                <div className="mb-4 d-flex justify-content-end">
                    <label htmlFor="wd-points" className="form-label pe-2 align-self-center" style={{ width: 'auto' }}>Points:</label>
                    <input id="wd-points" type="text" className="form-control" style={{ width: '500px' }} value={assignment.points} />
                </div>

                <div className="mb-4 d-flex justify-content-end">
                    <label htmlFor="wd-assignment-group" className="form-label pe-2 align-self-center" style={{ width: 'auto' }}>Assignment Group:</label>
                    <select id="wd-assignment-group-select" className="form-control" style={{ width: '500px' }}>
                        <option value="assignment">ASSIGNMENTS</option>
                        <option value="quiz">Quiz</option>
                        <option value="quiz">Test</option>
                    </select>
                </div>

                <div className="mb-4 d-flex justify-content-end">
                    <label htmlFor="wd-display-grade-as" className="form-label pe-2 align-self-center" style={{ width: 'auto' }}>Display Grade as:</label>
                    <select id="wd-display-grade-as" className="form-control" style={{ width: '500px' }}>
                        <option value="percentage">Percentage</option>
                        <option value="percentage">Letter Grades</option>
                    </select>
                </div>

                <div className="mb-4 d-flex justify-content-end">
                    <label htmlFor="wd-submission-type" className="form-label pe-2 align-self-start" style={{ width: 'auto' }}>Submission Type:</label>
                    <div style={{ border: '1px solid #ccc', padding: '10px', marginLeft: '20px', width: '500px' }}>
                    <div>
                        <select id="wd-submission-type" className="form-control" style={{ width: '400px' }}>
                            <option value="online">Online</option>
                            <option value="physical">Physical</option>
                        </select>
                    </div>
                
                        <div>
                            <label><strong>Online Entry Options</strong></label><br/>

                            <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                            <label htmlFor="wd-text-entry">Text Entry</label><br/>

                            <input type="checkbox" name="check-genre" id="wd-website-url"/>
                            <label htmlFor="wd-website-url">Website URL</label><br/>

                            <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                            <label htmlFor="wd-media-recordings">Media Recording</label><br/>

                            <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                            
                            <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                            <label htmlFor="wd-file-upload">File Update</label>
                        </div>
                    </div>
                </div>


                {/* Date Fields Layout */}
                <div className="mb-4 d-flex justify-content-end">
                    <label htmlFor="wd-submission-type" className="form-label pe-2 align-self-start" style={{ width: 'auto' }}>Assign:</label>
                    <div style={{ border: '1px solid #ccc', padding: '10px', marginLeft: '20px', width: '500px' }}>
                    <label><strong>Assign to</strong></label><br/>
                        <div>
                            <select id="wd-submission-type" className="form-control" style={{ width: '400px' }}>
                                <option value="everyone">Everyone</option>
                            </select>
                        </div>
                    <label>Due</label>
                        <div className="pe-2">
                            <input type="date" id="wd-due-date" className="form-control" style={{ width: '400px' }} value={assignment.due_date} />
                        </div>
                    
                        <div className="ps-2">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                                        <label htmlFor="wd-available-from" className="form-label">Available From:</label>
                                        <input type="date" id="wd-available-from" className="form-control" value={assignment.start_date} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', marginLeft: '20px' }}>
                                        <label htmlFor="wd-available-until" className="form-label">Until:</label>
                                        <input type="date" id="wd-available-until" className="form-control" value={assignment.due_date}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                </div>



                {/* Action Buttons */}
                <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary  me-2">Cancel</button>
                    <button className="btn btn-success ">Save</button>
                </div>
            
            </div> )}
        </div>
    );
}
