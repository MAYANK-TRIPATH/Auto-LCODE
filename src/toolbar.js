// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-2">
            <div className="mt-10 flex flex-wrap gap-4">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='custom1' label='Custom1' />
                <DraggableNode type='custom2' label='Custom2' />
                <DraggableNode type='custom3' label='Custom3' />
                <DraggableNode type='custom4' label='Custom4' />
                <DraggableNode type='custom5' label='Custom5' />
            </div>
        </div>

    );
};
