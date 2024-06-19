// frontend/src/nodes/inputNode.js

import React from 'react';
import { Handle, Position } from 'reactflow';
import Nodeabstration from './abstractions/Nodeabstration';

export const InputNode = ({ id, data }) => (
  <Nodeabstration id={id} data={data} nodeType="Input">
    <Handle type="source" position={Position.Right} id={`${id}-value`} />
  </Nodeabstration>
);
