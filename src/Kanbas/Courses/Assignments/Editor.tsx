export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <div>
            <label htmlFor="wd-name">Assignment Name</label>
            
        </div><br/>
        <div>
            <input id="wd-name" type="text" value="A1 - ENV + HTML" />
            
        </div><br/>
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea><br/><br/>
        
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          {/* Complete on your own */}
        </table><br/>

        <div>
            <label htmlFor="wd-group" className="form-control">Assignment Group</label>
            <select id="wd-group" className="form-control">
            <option value="assignment">ASSIGNMENTS</option>
            </select>
        </div><br/>

        <div>
            <label htmlFor="wd-display-grade-as" className="form-control">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-control">
            <option value="percentage">Percentage</option>
            </select>
        </div><br/>

        <div>
            <label htmlFor="wd-submission-type" className="form-control">Submission Type</label>
            <select id="wd-submission-type" className="form-control">
            <option value="online">Online</option>
            </select>
        </div><br/>

            <div>
            <label>Online Entry Options</label><br/>

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

            <table><br/>
        <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label><br/>
            <input id="wd-assign-to" type="text" value="Everyone" />
            </td>
        </tr>
        </table>

        <label htmlFor="wd-due-date"> Due </label>
        <input type="date"
            id="wd-due-date"
            value="2024-05-13"/><br/>

        <label htmlFor="wd-available-from"> Available from </label>
        <input type="date"
            id="wd-available-from"
            value="2024-05-06"/>

        <label htmlFor="wd-available-until"> Until </label>
        <input type="date"
            id="wd-available-until"
            value="2024-05-20"/><br/>

        <hr/>  {/* This is the horizontal rule for a visual separation */}

        <table width="100%"> 
            <tr>
                <td align="right">
                    <button>Cancel</button>
                    <button>Save</button>
                </td>
            </tr>
        </table>



    

      </div>
  );}
  