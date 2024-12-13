import React, { useState, useCallback, useRef } from 'react';
import { AiOutlineStop } from "react-icons/ai";
import { PiDotsThreeVerticalDuotone } from "react-icons/pi";
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignCenter, FaAlignRight, FaListUl, FaListOl, FaUndo, FaRedo, FaExpand, FaCompress } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";

export default function QuizEditor() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('details');
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
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');
  const [requireViewResults, setRequireViewResults] = useState(false);
  const [requireLockdownBrowser, setRequireLockdownBrowser] = useState(false);

  const [wordCount, setWordCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const [assignTo, setAssignTo] = useState('everyone');

  const handleFormat = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const countWords = useCallback((text: string) => {
    const plainText = text.replace(/<[^>]*>/g, '');
    const words = plainText.trim().split(/\s+/);
    return plainText.length ? words.length : 0;
  }, []);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerHTML;
    setWordCount(countWords(newContent));
  };

  const toggleFullscreen = () => {
    const editorElement = document.getElementById('editor-container');
    if (!editorElement) return;

    if (!isFullscreen) {
      if (editorElement.requestFullscreen) {
        editorElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleHeadingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      handleFormat('formatBlock', e.target.value);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFormat('foreColor', e.target.value);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-3">
      <h3 style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        Point
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px'
        }}>
          <input
            type="number"
            className="form-control"
            value={points}
            placeholder="0"
            onChange={(e) => {
              const value = e.target.value;
              setPoints(value === '' ? 0 : parseInt(value, 10) || 0);
            }}
            style={{
              width: '4em',
              textAlign: 'center',
              padding: '2px 4px',
              minHeight: 'unset',
              height: 'auto'
            }}
          />
          <AiOutlineStop style={{ marginLeft: '4px' }} />
          Not published
          <PiDotsThreeVerticalDuotone />
        </span>
      </h3>
      

      <hr />

      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'details' ? 'active' : ''}`} 
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('details');
            }}
            href="#"
          >
            Details
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'questions' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('questions');
            }}
            href="#"
          >
            Questions
          </a>
        </li>
      </ul>

      {activeTab === 'details' ? (
        <>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Unnamed Quiz"
          />
          <label>Quiz Instructions</label>

          <div className="editor-toolbar p-2 bg-light border rounded mb-2">
            <div className="btn-toolbar" role="toolbar">
              <div className="btn-group me-2">
                <button className="btn btn-light" onClick={() => handleFormat('undo')}>
                  <FaUndo />
                </button>
                <button className="btn btn-light" onClick={() => handleFormat('redo')}>
                  <FaRedo />
                </button>
              </div>

              <div className="btn-group me-2">
                <select 
                  className="form-select" 
                  onChange={handleHeadingChange}
                  style={{ width: 'auto' }}
                >
                  <option value="">Format</option>
                  <option value="h1">Heading 1</option>
                  <option value="h2">Heading 2</option>
                  <option value="h3">Heading 3</option>
                  <option value="p">Paragraph</option>
                </select>
              </div>

              <div className="btn-group me-2">
                <button className="btn btn-light" onClick={() => handleFormat('bold')}>
                  <FaBold />
                </button>
                <button className="btn btn-light" onClick={() => handleFormat('italic')}>
                  <FaItalic />
                </button>
                <button className="btn btn-light" onClick={() => handleFormat('underline')}>
                  <FaUnderline />
                </button>
              </div>

              <div className="btn-group me-2">
                <button className="btn btn-light" onClick={() => handleFormat('justifyLeft')}>
                  <FaAlignLeft />
                </button>
                <button className="btn btn-light" onClick={() => handleFormat('justifyCenter')}>
                  <FaAlignCenter />
                </button>
                <button className="btn btn-light" onClick={() => handleFormat('justifyRight')}>
                  <FaAlignRight />
                </button>
              </div>

              <div className="btn-group me-2">
                <button className="btn btn-light" onClick={() => handleFormat('insertUnorderedList')}>
                  <FaListUl />
                </button>
                <button className="btn btn-light" onClick={() => handleFormat('insertOrderedList')}>
                  <FaListOl />
                </button>
              </div>

              <div className="btn-group me-2">
                <input 
                  type="color" 
                  className="form-control form-control-color" 
                  onChange={handleColorChange}
                  title="Choose text color"
                />
              </div>
            </div>
          </div>

          <div 
            id="editor-container" 
            style={{ 
              position: 'relative',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginBottom: '20px'
            }}
          >
            <div
              ref={editorRef}
              contentEditable
              className="form-control"
              style={{ 
                minHeight: '300px',
                border: 'none',
                padding: '15px',
                boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
                marginBottom: '30px'
              }}
              onInput={handleInput}
            />
            
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                padding: '5px 15px',
                backgroundColor: '#f8f9fa',
                borderTop: '1px solid #ced4da',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomLeftRadius: '3px',
                borderBottomRightRadius: '3px'
              }}
            >
              <span style={{ fontSize: '0.875rem', color: '#6c757d' }}>
                Words: {wordCount}
              </span>
              <button 
                className="btn btn-light btn-sm"
                onClick={toggleFullscreen}
                style={{ padding: '2px 8px' }}
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>
          <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
                  <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Quiz Type:</label>
                  <div className="d-flex align-items-center">
                    <select className="form-select" value={quizType} onChange={e => setQuizType(e.target.value)}>
                      <option value="GRADED_QUIZ">Graded Quiz</option>
                      <option value="PRACTICE_QUIZ">Practice Quiz</option>
                      <option value="GRADED_SURVEY">Graded Survey</option>
                      <option value="UNGRADED_SURVEY">Ungraded Survey</option>
                    </select>
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
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <div style={{ width: '50%' }} className="d-flex align-items-center">
              <strong>Options</strong>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <div style={{ width: '50%' }} className="d-flex align-items-center">
              <input 
                type="checkbox" 
                className="form-check-input me-2" 
                id="shuffleAnswers"
                checked={shuffleAnswers}
                onChange={(e) => setShuffleAnswers(e.target.checked)}
              />
              <label>Shuffle Answers</label>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <div style={{ width: '50%' }} className="d-flex align-items-center">
              <div className="form-check me-2">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="timeLimit"
                  checked={timeLimit > 0}
                  onChange={(e) => setTimeLimit(e.target.checked ? 20 : 0)}
                />
                <label>Time Limit:</label>
              </div>
              <input
                type="number"
                className="form-control me-2"
                value={timeLimit}
                onChange={e => setTimeLimit(parseInt(e.target.value) || 0)}
                style={{ width: '5em' }}
              />
              <span>minutes</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '50%' }} className="d-flex align-items-center">
              <div className="border rounded p-3 w-100">
                <input 
                  type="checkbox" 
                  className="form-check-input me-2" 
                  id="multipleAttempts"
                  checked={multipleAttempts}
                  onChange={(e) => setMultipleAttempts(e.target.checked)}
                />
                <label>Allow Multiple Attempts</label>
              </div>
            </div>
          </div>

          <div className="setting-item d-grid align-items-center w-100" style={{ gridTemplateColumns: '40% 60%', gap: '1rem' }}>
              <label className="text-end pe-4 d-flex justify-content-end align-items-center w-100">Assign:</label>
              <div className="d-flex flex-column w-100">
                <div className="border rounded w-100" style={{ position: 'relative' }}>
                  <div className="d-flex flex-column w-100 p-3" style={{ marginBottom: '40px' }}>
                    <label className="mb-2"><strong>Assign to</strong></label>
                    <div className="d-flex align-items-center flex-wrap gap-2 border rounded p-3 w-100">
                      {assignTo ? (
                        <span className="badge bg-light text-dark d-flex align-items-center p-2 border">
                          everyone
                          <button 
                            className="btn-close ms-2" 
                            style={{ fontSize: '0.6rem' }}
                            onClick={() => setAssignTo('')}
                          ></button>
                        </span>
                      ) : (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search for users"
                          value={assignTo}
                          onChange={(e) => setAssignTo(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && (e.target as HTMLInputElement).value) {
                              setAssignTo('everyone');
                            }
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <div className="pe-2">
                        <label>Due Date</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          style={{ width: '400px' }} 
                          value={dueDate}
                          onChange={(e) => setDueDate(e.target.value)}
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
                                value={availableFrom}
                                onChange={(e) => setAvailableFrom(e.target.value)}
                              />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '200px', marginLeft: '20px' }}>
                              <label htmlFor="wd-available-until" className="form-label">Until:</label>
                              <input 
                                type="date" 
                                id="wd-available-until" 
                                className="form-control" 
                                value={availableUntil}
                                onChange={(e) => setAvailableUntil(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      left: 0,
                      padding: '5px 15px',
                      backgroundColor: '#f8f9fa',
                      borderTop: '1px solid #ced4da',
                      display: 'flex',
                      alignItems: 'center',
                      borderBottomLeftRadius: '3px',
                      borderBottomRightRadius: '3px'
                    }}
                  >
                    <button className="btn btn-light d-flex align-items-center gap-2 ">
                      <IoMdAdd />
                      Add
                    </button>
                  </div>
                </div>
              </div>     
          </div>
        </>
      ) : (
        <div className="mt-3 d-flex justify-content-center">
          <button className="btn btn-light">
          <IoMdAdd />Add New Question
          </button>
        </div>
      )}

      <hr />
      <div className="d-flex justify-content-end gap-2">
        <button 
          className="btn btn-secondary" 
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button 
          className="btn btn-danger" 
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <hr />
              
     

             

    </div>
  );
}
