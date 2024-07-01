import { useState } from 'react';
import './App.css';

function App() {
  const blobs = ['blob-1', 'blob-2', 'blob-3', 'blob-4', 'blob-5', 'blob-6', 'blob-7', 'blob-8', 'blob-9', 'blob-10']
  const [active, setActive] = useState(0)
  function changeBlob() {
    if(blobs[active+1])
      return setActive(active+1)
    return setActive(0)
  }
  return (
    <div className="App">
      <header className="App-header flex flex-col space-y-36">
        {/* Insert Blob Here */}
        <div className={`${blobs[active]} transition-all duration-300`}></div>

        <button onClick={changeBlob} className='bg-yellow-800 px-5 py-3 rounded text-sm'>
          <code>Change Blob</code>
        </button>

      </header>
    </div>
  );
}

export default App;
