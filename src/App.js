import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { marked } from 'marked';


function App() {
  const [edits, setEdits] = useState(`  # H1
  ## H2
  
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a link: [React.js](https://www.reactjs.org)
  
  * Lists of \`code\`
  * [ ] todo
  * [x] done
  
  > This is a blockquote

    <html>
      <head> Code blocks are fun! </head>
    </html>
  
  ~~~
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  ~~~

 ![rocket ship](https://img.fortawesome.com/1ce05b4b/ad-pro-visuals-cropped.svg)
  

`
  )

  function handleChange(e) {
    setEdits(e.target.value)
  }

const getMarkdownEdits=()=> {
    <ReactMarkdown children={edits} remarkPlugins={[remarkGfm]} />
  }

  marked.setOptions({breaks: true});
  

  return (
    <div className="App">
      <div className='container mt-5'>
        <div className='row'>

        <div className='col-6'>
          <div className='editor-window'>
            <div className='toolbar text-start p-2'>Editor</div>
              <textarea spellcheck="false" value={edits} onChange={handleChange} id="editor" text="editor">Text area Editor</textarea>
          </div>
        </div>

          <div className='col-6'>
            <div className='preview-window'>
                <div className='toolbar text-start p-2'>Preview</div>
                    <div id="preview" className='px-4 pb-5 text-start'><ReactMarkdown children={edits} remarkPlugins={[remarkGfm]}/></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
