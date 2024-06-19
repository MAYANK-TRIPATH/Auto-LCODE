import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Nodeabstration from './abstractions/Nodeabstration';

export const CustomNode5 = ({ id, data }) => {
 
  return (
    <Nodeabstration id={id} data={data} nodeType="Custom5">
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </Nodeabstration>
  );
};
