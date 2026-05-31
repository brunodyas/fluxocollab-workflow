// filterNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id }) => {
    const inputs = [
        { id: 'array', position: Position.Left }
    ];
    const outputs = [
        { id: 'filtered', position: Position.Right }
    ];

    return (
        <BaseNode id={id} title="Filter" inputs={inputs} outputs={outputs}>
            <div>
                <span>Filters an array.</span>
            </div>
        </BaseNode>
    );
};
