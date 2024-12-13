import React, { ChangeEvent, useState, useRef } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, 
  FaAlignCenter, FaAlignRight, FaListUl, 
  FaListOl, FaUndo, FaRedo, FaCompress, FaExpand, FaTable, FaPencilAlt, FaTrash, FaArrowRight } from "react-icons/fa";

export default function MultipleChoice() {
  const [points, setPoints] = useState<string>('');
  const editorRef = useRef<HTMLDivElement>(null);
  const [wordCount, setWordCount] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [answers, setAnswers] = useState<Array<{
    id: number;
    text: string;
    isCorrect: boolean;
    isEditing: boolean;
  }>>([
    { id: 1, text: '', isCorrect: false, isEditing: false },
    { id: 2, text: '', isCorrect: false, isEditing: false },
  ]);
  const [questionType, setQuestionType] = useState<string>('Multiple Choice');

  const getPlaceholder = () => {
    switch (questionType) {
      case 'Multiple Choice':
        return 'Easy Question';
      case 'True/False':
        return 'Is 2+2=4?';
      case 'Fill in the Blank':
        return 'what is 2+2=___';
      default:
        return 'Enter your question';
    }
  };

  const handleFormat = (command: string) => {
    try {
      document.execCommand(command, false);
    } catch (error) {
      console.error('Format command failed:', error);
    }
  };

  const handleHeadingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      if (event.target.value) {
        document.execCommand('formatBlock', false, event.target.value);
      }
    } catch (error) {
      console.error('Heading change failed:', error);
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      document.execCommand('foreColor', false, event.target.value);
    } catch (error) {
      console.error('Color change failed:', error);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      const text = editorRef.current.innerText;
      const words = text.trim().split(/\s+/).filter(word => word.length > 0);
      setWordCount(words.length);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      editorRef.current?.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  const handleInsertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      document.execCommand('insertImage', false, url);
    }
  };

  const handleInsertTable = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      document.execCommand('insertImage', false, url);
    }
  };

  const handleInsertLink = () => {
    const url = prompt('Enter URL:');
    const text = prompt('Enter link text:');
    if (url && text) {
      document.execCommand('insertHTML', false, `<a href="${url}" target="_blank">${text}</a>`);
    }
  };

  const addAnswer = () => {
    setAnswers([
      ...answers,
      {
        id: answers.length + 1,
        text: '',
        isCorrect: false,
        isEditing: false
      }
    ]);
  };

  const removeAnswer = (id: number) => {
    if (answers.length > 2) { // at least 2 answers
      setAnswers(answers.filter(answer => answer.id !== id));
    }
  };

  const updateAnswer = (id: number, text: string) => {
    setAnswers(answers.map(answer => 
      answer.id === id ? { ...answer, text } : answer
    ));
  };

  const toggleCorrect = (id: number) => {
    setAnswers(answers.map(answer => 
      answer.id === id ? { ...answer, isCorrect: !answer.isCorrect } : answer
    ));
  };

  const toggleEdit = (id: number) => {
    setAnswers(answers.map(answer => 
      answer.id === id ? { ...answer, isEditing: !answer.isEditing } : answer
    ));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if (event.key === 'Enter') {
      toggleEdit(id);
    }
  };

  const renderTrueFalseAnswers = () => {
    return (
      <div className="answers-container">
        {['True', 'False'].map((option, index) => (
          <div 
            key={index}
            className="answer-row d-flex align-items-center gap-3 mb-3 p-2"
          >
            <div className="d-flex align-items-center gap-2" style={{ minWidth: '150px' }}>
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                {option === 'True' && answers[0]?.isCorrect || 
                 option === 'False' && answers[1]?.isCorrect ? 
                 'Correct Answer' : 'Possible Answer'}
              </span>
              {(option === 'True' && answers[0]?.isCorrect || 
                option === 'False' && answers[1]?.isCorrect) && (
                <FaArrowRight 
                  style={{ 
                    color: '#28a745',
                    fontSize: '1.1rem' 
                  }} 
                />
              )}
            </div>

            <div 
              className="flex-grow-1 p-2"
              onClick={() => {
                setAnswers([
                  { ...answers[0], isCorrect: option === 'True' },
                  { ...answers[1], isCorrect: option === 'False' }
                ]);
              }}
              style={{ cursor: 'pointer' }}
            >
              {option}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderFillInBlank = () => {
    return (
      <div className="answers-container">
        {answers.map((answer) => (
          <div 
            key={answer.id} 
            className="answer-row d-flex align-items-center gap-3 mb-3 p-2"
            style={{ 
              backgroundColor: answer.isEditing ? '#f8f9fa' : 'transparent',
              borderRadius: '4px'
            }}
          >
            <div className="d-flex align-items-center gap-2" style={{ minWidth: '150px' }}>
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                {answer.isCorrect ? 'Correct Answer' : 'Possible Answer'}
              </span>
              {answer.isCorrect && (
                <FaArrowRight 
                  style={{ 
                    color: '#28a745',
                    fontSize: '1.1rem' 
                  }} 
                />
              )}
            </div>

            <div className="flex-grow-1">
              {answer.isEditing ? (
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    className="form-control"
                    value={answer.text}
                    onChange={(e) => updateAnswer(answer.id, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, answer.id)}
                    placeholder={`Acceptable Answer ${answer.id}`}
                    autoFocus
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => toggleEdit(answer.id)}
                  >
                    ✓
                  </button>
                </div>
              ) : (
                <div 
                  className="p-2"
                  onClick={() => toggleCorrect(answer.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {answer.text || `Acceptable Answer ${answer.id}`}
                </div>
              )}
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-link text-muted p-1"
                onClick={() => toggleEdit(answer.id)}
                title={answer.isEditing ? "Save" : "Edit"}
              >
                <FaPencilAlt size="14" />
              </button>
              <button
                className="btn btn-link text-danger p-1"
                onClick={() => removeAnswer(answer.id)}
                disabled={answers.length <= 2}
                title="Delete"
              >
                <FaTrash size="14" />
              </button>
            </div>
          </div>
        ))}
        
        <div className="mt-3 d-flex justify-content-end">
          <button 
            className="btn btn-outline-secondary"
            onClick={addAnswer}
          >
            Add Another Answer
          </button>
        </div>

      </div>
    );
  };

  const renderAnswers = () => {
    switch (questionType) {
      case 'Multiple Choice':
        return (
          <div className="answers-container">
            {answers.map((answer) => (
              <div 
                key={answer.id} 
                className="answer-row d-flex align-items-center gap-3 mb-3 p-2"
                style={{ 
                  backgroundColor: answer.isEditing ? '#f8f9fa' : 'transparent',
                  borderRadius: '4px'
                }}
              >
                <div className="d-flex align-items-center gap-2" style={{ minWidth: '150px' }}>
                  <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                    {answer.isCorrect ? 'Correct Answer' : 'Possible Answer'}
                  </span>
                  {answer.isCorrect && (
                    <FaArrowRight 
                      style={{ 
                        color: '#28a745',
                        fontSize: '1.1rem' 
                      }} 
                    />
                  )}
                </div>

                <div className="flex-grow-1">
                  {answer.isEditing ? (
                    <div className="d-flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        value={answer.text}
                        onChange={(e) => updateAnswer(answer.id, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, answer.id)}
                        placeholder={`Option ${answer.id}`}
                        autoFocus
                      />
                      <button
                        className="btn btn-success"
                        onClick={() => toggleEdit(answer.id)}
                      >
                        ✓
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="p-2"
                      onClick={() => toggleCorrect(answer.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {answer.text || `Option ${answer.id}`}
                    </div>
                  )}
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-link text-muted p-1"
                    onClick={() => toggleEdit(answer.id)}
                    title={answer.isEditing ? "Save" : "Edit"}
                  >
                    <FaPencilAlt size="14" />
                  </button>
                  <button
                    className="btn btn-link text-danger p-1"
                    onClick={() => removeAnswer(answer.id)}
                    disabled={answers.length <= 2}
                    title="Delete"
                  >
                    <FaTrash size="14" />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="mt-3 d-flex justify-content-end">
              <button 
                className="btn btn-outline-secondary"
                onClick={addAnswer}
              >
                Add Another Answer
              </button>
            </div>
          </div>
        );
      case 'True/False':
        return renderTrueFalseAnswers();
      case 'Fill in the Blank':
        return renderFillInBlank();
      default:
        return null;
    }
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <input 
            type="text" 
            className="form-control"
            placeholder={getPlaceholder()} 
          />
          <Dropdown>
            <Dropdown.Toggle variant="secondary">
              {questionType}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setQuestionType('Multiple Choice')}>
                Multiple Choice
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setQuestionType('True/False')}>
                True/False
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setQuestionType('Fill in the Blank')}>
                Fill in the Blank
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex align-items-center gap-2" style={{ width: "100px" }}>
          <label>pts</label>
          <input
            type="number"
            className="form-control"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="4"
          />
        </div>

      </div>
      <hr />
      <h6>Enter the question and multiple choices, then select the correct answer.</h6>
      <h5>Question: </h5>
      <div className="editor-toolbar p-2 bg-light border rounded mb-2">
        <div className="btn-toolbar" role="toolbar">
          <Dropdown className="me-2">
            <Dropdown.Toggle variant="light">
              Edit
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFormat('undo')}>Undo</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFormat('redo')}>Redo</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleFormat('cut')}>Cut</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFormat('copy')}>Copy</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFormat('paste')}>Paste</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFormat('selectAll')}>Select All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="me-2">
            <Dropdown.Toggle variant="light">
              View
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={toggleFullscreen}>
                {fullscreen ? 'Exit Full Screen' : 'Full Screen'}
              </Dropdown.Item>
              <Dropdown.Item>Show Blocks</Dropdown.Item>
              <Dropdown.Item>Preview</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="me-2">
            <Dropdown.Toggle variant="light">
              Insert
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleInsertImage}>Image</Dropdown.Item>
              <Dropdown.Item onClick={handleInsertTable}>Table</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFormat('insertHorizontalRule')}>Horizontal Line</Dropdown.Item>
              <Dropdown.Item onClick={handleInsertLink}>Link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
            {fullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>

      <h5>Answer: </h5>
      {renderAnswers()}
      
      <button className="btn btn-light">Cancel</button>
      <button className="btn btn-danger">Update Question</button>
      
       
      
    </div>
  );
}
