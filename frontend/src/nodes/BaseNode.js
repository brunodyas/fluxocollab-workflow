// BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, style, title, children, inputs = [], outputs = [] }) => {
  return (
    <div className="custom-node" style={style}>
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${input.id || index}`}
          type="target"
          position={input.position || Position.Left}
          id={`${id}-${input.id}`}
          style={input.style || {}}
        />
      ))}

      <div className="node-header">
        <span>{title}</span>
      </div>
      
      <div className="node-content">
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${output.id || index}`}
          type="source"
          position={output.position || Position.Right}
          id={`${id}-${output.id}`}
          style={output.style || {}}
        />
      ))}
    </div>
  );
};
