import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as db from "../../Database";
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import * as client from './client';


interface Assignment {
    _id?: string; 
    title: string;
    description: string;
    points: number;
    start_date: string;
    due_date: string;
    course?: string;
}

export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isNewAssignment = aid === 'new';
    

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    
    const [isEditing, setIsEditing] = useState(isNewAssignment);
    
    const [formData, setFormData] = useState<Assignment>({
        _id: '',  
        title: '',
        description: '',
        points: 100,
        start_date: '',
        due_date: '',
        course: cid
    });

  
    const generateNewId = () => {
        const existingIds = db.assignments
            .map(a => a._id)
            .filter(id => id.startsWith('A'))
            .map(id => parseInt(id.slice(1)));
        const maxId = Math.max(...existingIds, 0);
        return `A${(maxId + 1).toString().padStart(3, '0')}`;
    };

    const fetchAssignment = async () => {
        if (!isNewAssignment && aid) {
            try {
                const assignments = await client.findAssignmentsForCourse(cid!);
                const assignment = assignments.find((a: Assignment) => a._id === aid);
                if (assignment) {
                    setFormData(assignment);
                }
            } catch (error) {
                console.error("Error fetching assignment:", error);
            }
        }
    };

    useEffect(() => {
        fetchAssignment();
    }, [aid, cid, isNewAssignment]);

    const handleSaveOrEdit = async () => {
        if (!isNewAssignment && !isEditing) {
            setIsEditing(true);
        } else {
            try {
                const assignmentData = {
                    ...formData,
                    course: cid,
                    title: formData.title || "New Assignment",
                    description: formData.description || "New Description",
                    points: Number(formData.points) || 100,
                    start_date: formData.start_date ? new Date(formData.start_date) : null,
                    due_date: formData.due_date ? new Date(formData.due_date) : null,
                    end_date: formData.due_date ? new Date(formData.due_date) : null
                };

                let result;
                if (isNewAssignment) {
                    result = await client.createAssignment(cid!, assignmentData);
                } else {
                    result = await client.updateAssignment(aid!, assignmentData);
                }

                if (result) {
                    navigate(`/Kanbas/Courses/${cid}/Assignments`);
                }
            } catch (error) {
                console.error("Error saving assignment:", error);
                alert("Failed to save assignment. Please try again.");
            }
        }
    };

    
    return (
        <div id="wd-assignments-editor" className="assignment-container mt-3">
              <div> 
                <div className="mb-4">
                    <label htmlFor="wd-assignments-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-assignments-nameinput"
                        type="text"
                        className="form-control"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        disabled={!isEditing && !isNewAssignment}
                        placeholder={isNewAssignment ? "New Assignment" : ""}
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea 
                        id="wd-description" 
                        className="form-control" 
                        rows={4} 
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        disabled={!isEditing && !isNewAssignment}
                        placeholder={isNewAssignment ? "New Description" : ""}
                    />
                </div>

                <div className="mb-4 d-flex justify-content-end">
                    <label htmlFor="wd-points" className="form-label pe-2 align-self-center" style={{ width: 'auto' }}>Points:</label>
                    <input 
                        id="wd-points" 
                        type="number" 
                        className="form-control" 
                        style={{ width: '500px' }} 
                        value={formData.points}
                        onChange={(e) => setFormData({...formData, points: Number(e.target.value)})}
                        disabled={!isEditing && !isNewAssignment}
                    />
                </div>

                {!isEditing && (
                    <>
                    <div className="mb-4 d-flex justify-content-end" >
                        <label htmlFor="wd-assignment-group" className="form-label pe-2 align-self-center" style={{ width: 'auto' }}>Assignment Group:</label>
                        <select id="wd-assignment-group-select" className="form-control" style={{ width: '500px' }} disabled={!isEditing}>
                            <option value="assignment">ASSIGNMENTS</option>
                            <option value="quiz">Quiz</option>
                            <option value="quiz">Test</option>
                        </select>
                    </div>

                    <div className="mb-4 d-flex justify-content-end">
                        <label htmlFor="wd-display-grade-as" className="form-label pe-2 align-self-center" style={{ width: 'auto' }}>Display Grade as:</label>
                        <select id="wd-display-grade-as" className="form-control" style={{ width: '500px' }} disabled={!isEditing}>
                            <option value="percentage">Percentage</option>
                            <option value="percentage">Letter Grades</option>
                        </select>
                    </div>

                    <div className="mb-4 d-flex justify-content-end">
                        <label htmlFor="wd-submission-type" className="form-label pe-2 align-self-start" style={{ width: 'auto' }}>Submission Type:</label>
                        <div style={{ border: '1px solid #ccc', padding: '10px', marginLeft: '20px', width: '500px' }}>
                            <div>
                                <select id="wd-submission-type" className="form-control" style={{ width: '400px' }} disabled={!isEditing}>
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
                    </>
                )}

                <div className="mb-4 d-flex justify-content-end">
                    <label htmlFor="wd-submission-type" className="form-label pe-2 align-self-start" style={{ width: 'auto' }}>Assign:</label>
                    <div style={{ border: '1px solid #ccc', padding: '10px', marginLeft: '20px', width: '500px' }}>
                        <div className="pe-2">
                            <label>Due Date</label>
                            <input 
                                type="date" 
                                id="wd-due-date" 
                                className="form-control" 
                                style={{ width: '400px' }} 
                                value={formData.due_date}
                                onChange={(e) => setFormData({...formData, due_date: e.target.value})}
                                disabled={!isEditing && !isNewAssignment}
                            />
                        </div>
                        
                        <div className="ps-2">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                                        <label htmlFor="wd-available-from" className="form-label">Available From:</label>
                                        <input 
                                            type="date" 
                                            id="wd-available-from" 
                                            className="form-control" 
                                            value={formData.start_date}
                                            onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                                            disabled={!isEditing && !isNewAssignment}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', marginLeft: '20px' }}>
                                        <label htmlFor="wd-available-until" className="form-label">Until:</label>
                                        <input 
                                            type="date" 
                                            id="wd-available-until" 
                                            className="form-control" 
                                            value={formData.due_date}
                                            onChange={(e) => setFormData({...formData, due_date: e.target.value})}
                                            disabled={!isEditing && !isNewAssignment}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-2" 
                            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>
                        Cancel
                    </button>
                    {/* on FACULTY can see edit/save button */}
                    {currentUser?.role === 'FACULTY' && (
                        <button className="btn btn-danger" 
                                onClick={handleSaveOrEdit}>
                            {isNewAssignment ? "Save" : (isEditing ? "Save" : "Edit")}
                        </button>
                    )}
                </div>
            
            </div> 
        </div>
    );
}
