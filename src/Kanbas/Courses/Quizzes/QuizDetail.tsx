import React, { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function QuizDetail() {
  const navigate = useNavigate();

  const [quizType, setQuizType] = useState('Graded Quiz');
  const [points, setPoints] = useState(0); 
  const [assignmentGroup, setAssignmentGroup] = useState('Quizzes');
  const [shuffleAnswers, setShuffleAnswers] = useState(true);
  const [timeLimit, setTimeLimit] = useState(20); // in minutes
  const [multipleAttempts, setMultipleAttempts] = useState(false);
  const [maxAttempts, setMaxAttempts] = useState(1);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [oneQuestionAtATime, setOneQuestionAtATime] = useState(true);
  const [webcamRequired, setWebcamRequired] = useState(false);
  const [lockQuestions, setLockQuestions] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [availableDate, setAvailableDate] = useState('');
  const [untilDate, setUntilDate] = useState('');
  const [requireViewResults, setRequireViewResults] = useState(false);
  const [requireLockdownBrowser, setRequireLockdownBrowser] = useState(false);

  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-3 gap-2">
        <button 
          className="btn btn-secondary" 
          disabled
        >
          Preview
        </button>
        <button 
          className="btn btn-secondary d-flex align-items-center gap-2" 
          onClick={() => navigate("edit")}
        >
          <FaPencilAlt /> Edit
        </button>
      </div>
      <hr />
      <h1 >Q1 HTML</h1>
      <div className="container">
        <form className="w-75 mx-auto d-flex flex-column gap-3">
          <div className="quiz-settings d-grid gap-3 w-100">
            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Quiz Type:</label>
              <div className="d-flex align-items-center">
                <select className="form-select" value={quizType} onChange={e => setQuizType(e.target.value)}>
                  <option value="Graded Quiz">Graded Quiz</option>
                  <option value="Practice Quiz">Practice Quiz</option>
                  <option value="Graded Survey">Graded Survey</option>
                  <option value="Ungraded Survey">Ungraded Survey</option>
                </select>
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Points:</label>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control"
                  value={points}
                  onChange={e => setPoints(parseInt(e.target.value) || 0)}
                  disabled
                  placeholder="Points - the sum of the points of all questions in the quiz"
                />
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Assignment Group:</label>
              <div className="d-flex align-items-center">
                <select className="form-select" value={assignmentGroup} onChange={e => setAssignmentGroup(e.target.value)}>
                  <option value="Quizzes">Quizzes</option>
                  <option value="Exams">Exams</option>
                  <option value="Assignments">Assignments</option>
                  <option value="Projects">Projects</option>
                </select>
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Shuffle Answers:</label>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={shuffleAnswers}
                  onChange={e => setShuffleAnswers(e.target.checked)}
                />
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Time Limit:</label>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control me-2"
                  value={timeLimit}
                  onChange={e => setTimeLimit(parseInt(e.target.value) || 0)}
                />
                <span>minutes</span>
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Multiple Attempts:</label>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={multipleAttempts}
                  onChange={e => setMultipleAttempts(e.target.checked)}
                />
              </div>
            </div>

            {multipleAttempts && (
              <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
                <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">How Many Attempts:</label>
                <input
                  type="number"
                  className="form-control"
                  value={maxAttempts}
                  onChange={e => setMaxAttempts(parseInt(e.target.value) || 1)}
                />
              </div>
            )}

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">View Responses:</label>
              <input
                type="text"
                className="form-control"
                value="Always"
                disabled
              />
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Show Correct Answers:</label>
              <input
                type="text"
                className="form-control"
                value="Immediately"
                disabled
              />
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">One Question at a Time:</label>
              <div className="d-flex align-items-center gap-3">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="oneQuestionYes"
                    name="oneQuestionAtATime"
                    checked={oneQuestionAtATime}
                    onChange={() => setOneQuestionAtATime(true)}
                  />
                  <label className="form-check-label" htmlFor="oneQuestionYes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="oneQuestionNo"
                    name="oneQuestionAtATime"
                    checked={!oneQuestionAtATime}
                    onChange={() => setOneQuestionAtATime(false)}
                  />
                  <label className="form-check-label" htmlFor="oneQuestionNo">No</label>
                </div>
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Require Respondus Lockdown Browser:</label>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={requireLockdownBrowser}
                  onChange={e => setRequireLockdownBrowser(e.target.checked)}
                />
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Require to View Quiz Results:</label>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={requireViewResults}
                  onChange={e => setRequireViewResults(e.target.checked)}
                />
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Webcam Required:</label>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={webcamRequired}
                  onChange={e => setWebcamRequired(e.target.checked)}
                />
              </div>
            </div>

            <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Lock Questions After Answering:</label>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={lockQuestions}
                  onChange={e => setLockQuestions(e.target.checked)}
                />
              </div>
        
            </div>
            <div className="table-responsive">
                    <table className="table">
                    <thead>
                        <tr><th>Due</th><th>For</th><th>Available From</th><th>Until</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Due</td><td>For</td><td>Available From</td><td>Until</td>
                      
                        </tr>
                    </tbody>
                    </table>
                </div>
          </div>
        </form>
      </div>
    </div>
  );
}


