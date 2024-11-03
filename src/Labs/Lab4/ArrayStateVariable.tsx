import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success">Add Element</button>
        {array.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px solid gray', padding: '10px', width: "280px" }}>
          <h3><strong>{item}</strong></h3>
          <button onClick={() => deleteElement(index)}
                  id="wd-delete-element-click" className="btn btn-danger">
            Delete
          </button>
        </div>
        ))}
      <hr/>
    </div>
  );
}
