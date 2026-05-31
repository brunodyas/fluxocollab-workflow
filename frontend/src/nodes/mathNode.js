// mathNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
    const inputs = [
        { id: 'a', position: Position.Left, style: { top: '33%' } },
        { id: 'b', position: Position.Left, style: { top: '66%' } }
    ];
    const outputs = [
        { id: 'result', position: Position.Right }
    ];

    return (
        <BaseNode id={id} title="Math" inputs={inputs} outputs={outputs}>
            <div>
                <span>Executes math operations.</span>
            </div>
        </BaseNode>
    );
};
