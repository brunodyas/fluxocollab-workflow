// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });
            const data = await response.json();

            alert(`Pipeline Analysis\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag ? 'Yes' : 'No'}`);
        } catch (error) {
            console.error('Error parsing pipeline:', error);
            alert('Failed to parse pipeline. Make sure backend is running.');
        }
    };

    return (
        <div className="submit-container">
            <button className="submit-btn" type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
};
