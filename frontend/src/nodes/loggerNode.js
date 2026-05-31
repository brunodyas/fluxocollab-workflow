// loggerNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id }) => {
    const inputs = [
        { id: 'data', position: Position.Left }
    ];

    return (
        <BaseNode id={id} title="Logger" inputs={inputs}>
            <div>
                <span>Logs data to console.</span>
            </div>
        </BaseNode>
    );
};
