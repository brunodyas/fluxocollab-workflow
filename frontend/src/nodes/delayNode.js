// delayNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id }) => {
    const inputs = [
        { id: 'trigger', position: Position.Left }
    ];
    const outputs = [
        { id: 'delayed', position: Position.Right }
    ];

    return (
        <BaseNode id={id} title="Delay" inputs={inputs} outputs={outputs}>
            <div>
                <span>Waits before continuing.</span>
            </div>
        </BaseNode>
    );
};
