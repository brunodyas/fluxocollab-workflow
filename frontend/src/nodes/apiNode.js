// apiNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APINode = ({ id }) => {
    const inputs = [
        { id: 'trigger', position: Position.Left }
    ];
    const outputs = [
        { id: 'data', position: Position.Right }
    ];

    return (
        <BaseNode id={id} title="API Request" inputs={inputs} outputs={outputs}>
            <div>
                <span>Fetches external data.</span>
            </div>
        </BaseNode>
    );
};
