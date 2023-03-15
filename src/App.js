import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [edits, setEdits] = useState('')

  function handleChange(e) {
    setEdits(e.target.value)
  }

  return (
    <div className="App">
      <div className='container mt-5'>
        <div className='row'>

        <div className='col-6'>
          <div className='editor-window'>
            <div className='toolbar text-start p-2'>Editor</div>
              <textarea value={edits} onChange={handleChange} id="editor" >Text area Editor</textarea>
          </div>
        </div>

          <div className='col-6'>
            <div className='preview-window'>
                <div className='toolbar text-start p-2'>Preview</div>
                    <div id="preview">{edits}</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
