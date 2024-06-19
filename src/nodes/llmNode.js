// frontend/src/nodes/llmNode.js

import React from 'react';
import { Handle, Position } from 'reactflow';
import Nodeabstration from './abstractions/Nodeabstration';

export const LLMNode = ({ id, data }) => (
  <Nodeabstration id={id} data={data} nodeType="LLM">
    <Handle type="target" position={Position.Left} id={`${id}-system`} style={{ top: '33%' }} />
    <Handle type="target" position={Position.Left} id={`${id}-prompt`} style={{ top: '67%' }} />
    <Handle type="source" position={Position.Right} id={`${id}-response`} />
  </Nodeabstration>
);
