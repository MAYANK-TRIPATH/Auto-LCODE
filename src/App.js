import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="bg-gradient-to-r from-black via-purple-900 to-black animate-gradient-x">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>

  );
}

export default App;
