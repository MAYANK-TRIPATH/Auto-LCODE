import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Nodeabstration from './abstractions/Nodeabstration';

export const CustomNode4 = ({ id, data }) => {
 
  return (
    <Nodeabstration id={id} data={data} nodeType="Custom4">
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </Nodeabstration>
  );
};
