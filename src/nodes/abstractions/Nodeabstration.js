
import React, { useState } from 'react';


const Nodeabstration = ({ id, data, nodeType, children }) => {
  const [name, setName] = useState(data?.name || `${nodeType}-${id.split('-')[1]}`);
  const [type, setType] = useState(data?.type || 'Text');

  const handleNameChange = (e) => setName(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);

  return (
    <div className="w-60 h-32 border-2 shadow-2xl border-black bg-purple-800">
      <div className='bg-purple-600 text-white'>
        <span>{nodeType}</span>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select value={type} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
            {/* <option value="Image">Image</option> */}
          </select>
        </label>
      </div>
      {children}
    </div>
  );
};

export default Nodeabstration;
