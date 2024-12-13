import React, { ChangeEvent, useState, useRef, useEffect } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
export default function QuizPreview() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [points, setPoints] = useState("4");

  const formatDateTime = (date: Date) => {
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const time = date.toLocaleString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    }).toLowerCase();
    
    return `${month} ${day} at ${time}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <br/>
      <h1> Q1 - HTML</h1>
      <div id="wd-css-background-colors">
        <h6 style={{ backgroundColor: 'pink', color: 'red' }}>
          <AiOutlineExclamationCircle />
          This is a preview of the published version of the quiz
        </h6>
      </div>
      <label>Started:</label>
      <span>{formatDateTime(currentTime)}</span>
      <h1>Question Instructions</h1>
      <hr/>
      <div style={{ 
        display: 'flex',      // 添加 flex 布局
        justifyContent: 'center',  // 水平居中
        width: '100%'         // 确保父容器占满宽度
      }}>
        <div style={{ 
          border: '1px solid #ccc', 
          borderRadius: '5px',
          width: '900px'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            backgroundColor: '#f5f5f5', 
            padding: '10px', 
            borderBottom: '1px solid #ccc' 
          }}>
            <h3>Question 1</h3>
            <div className="d-flex align-items-center gap-2">
              <input
                type="number"
                className="form-control"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                placeholder="4"
                style={{ width: '60px' }}
              /> 
              <label>pts</label>
            </div>
          </div>
          <div style={{ padding: '20px' }}>
              <p>What is 2+3?</p>
              <hr/>
              <p>Answer here</p>
          </div>
          
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <button className="btn btn-light">Next <IoMdArrowDropright /></button>
      </div>
      <br/>
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '5px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '10px'
      }}>
        <label>Quiz saved at {currentTime.toLocaleString('en-US', { 
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        }).toLowerCase()}</label> 
        <button className="btn btn-light">Submit Quiz</button>
      </div>
      <br/>
      <br/>

      <div id="wd-css-background-colors">
        <h6 style={{ backgroundColor: '#f8f9fa', color: '#000' }}>
          <FaPencilAlt /> Keep Editing this quiz
        </h6>
      </div>
      <br/>

      <h1>Questions</h1>
      <div>
        <p style={{ color: 'red' }}>
          <FaRegQuestionCircle style={{ color: '#6c757d' }} /> Iterate question here
        </p>
      </div>





    </div>
  );
}
