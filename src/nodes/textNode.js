// frontend/src/nodes/textNode.js

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Nodeabstration from './abstractions/Nodeabstration';

export const TextNode = ({ id, data }) => {
 
  return (
    <Nodeabstration id={id} data={data} nodeType="Text">
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </Nodeabstration>
  );
};
