// frontend/src/submit.js

import React from 'react';
import { useNodes, useEdges } from 'reactflow';
import axios from 'axios';

export const SubmitButton = () => {
    const nodes = useNodes();
    const edges = useEdges();

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/pipelines/parse', {
                nodes: nodes,
                edges: edges,
            });

            const { num_nodes, num_edges, is_dag } = response.data;
            alert(`Number of nodes: ${num_nodes}\nNumber of edges: ${num_edges}\nIs DAG: ${is_dag}`);
        } catch (error) {
            console.error('Error submitting the pipeline:', error);
            alert('Failed to submit the pipeline.');
        }
    };

    return (
        <div className="flex items-center justify-center rounded-lg shadow-lg">
            <button
                className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded shadow-md transition duration-300 border border-black"
                type="button"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};
