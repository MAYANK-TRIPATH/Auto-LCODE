// frontend/src/nodes/outputNode.js

import React from 'react';
import { Handle, Position } from 'reactflow';
import Nodeabstration from './abstractions/Nodeabstration';

export const OutputNode = ({ id, data }) => (
  <Nodeabstration id={id} data={data} nodeType="Output">
    <Handle type="target" position={Position.Left} id={`${id}-value`} />
  </Nodeabstration>
);
