// textNode.js

import { useState, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Resize text area based on content
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  // Variable detection
  useEffect(() => {
    const rxp = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    let match;
    const detectedVars = new Set();
    while ((match = rxp.exec(currText)) !== null) {
      detectedVars.add(match[1]);
    }
    setVariables(Array.from(detectedVars));
    adjustHeight();
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const inputs = variables.map((v, index) => ({
    id: v,
    position: Position.Left,
    // Distribute evenly, handling the case of 1 variable carefully
    style: { top: `${((index + 1) / (variables.length + 1)) * 100}%` }
  }));

  const outputs = [
    { id: 'output', position: Position.Right }
  ];

  return (
    <BaseNode id={id} title="Text" inputs={inputs} outputs={outputs}>
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{ width: '100%', minHeight: '40px' }}
        />
      </label>
    </BaseNode>
  );
}
