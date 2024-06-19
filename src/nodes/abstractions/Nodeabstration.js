import React, { useState, useEffect, useRef } from 'react';

const Nodeabstration = ({ id, data, nodeType, children }) => {
  const [name, setName] = useState(data?.name || `${nodeType}-${id.split('-')[1]}`);
  const [type, setType] = useState(data?.type || 'Text');
  const [variables, setVariables] = useState([]);
  const inputRef = useRef(null);
  const cardRef = useRef(null);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    detectVariables(value);
  };

  const handleTypeChange = (e) => setType(e.target.value);

  const detectVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    let match;
    const vars = [];
    while ((match = regex.exec(text)) !== null) {
      vars.push(match[1]);
    }
    setVariables(vars);
  };

  useEffect(() => {
    const input = inputRef.current;
    const card = cardRef.current;
    if (input && card) {
      
      input.style.height = 'auto'; 
      input.style.width = `${input.scrollWidth}px`;
      input.style.height = `${input.scrollHeight}px`;

      
      card.style.height = `${input.scrollHeight + 90}px`; 
    }
  }, [name]);

  return (
    <div ref={cardRef} className="w-60 border-2 shadow-2xl border-black bg-purple-800 relative">
      <div className='bg-purple-600 text-white p-1'>
        <span>{nodeType}</span>
      </div>
      <div>
        <label >
          Name:
          <textarea
            ref={inputRef}
            value={name}
            onChange={handleNameChange}
            className="w-full resize-none overflow-hidden"
            style={{ resize: 'none', overflow: 'hidden', width: '100%'}}
          />
        </label>
        <label>
          Type:
          <select value={type} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      {variables.map((variable, index) => (
        <div
          key={index}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 border border-black rounded"
          style={{ padding: '2px 4px', margin: '2px 0', transform: `translateX(-100%) translateY(${index * 30}px)` }}
        >
          {variable}
        </div>
      ))}
      {children}
    </div>
  );
};

export default Nodeabstration;

