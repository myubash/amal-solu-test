import React, {useState, useRef} from 'react'
import jsPDF from 'jspdf'

import './style.css'

const TextToPDF = (props) => {
  const [dragActive, setDragActive] = useState(false);
  const [content, setContent] = useState('')
  const [filename, setFilename] = useState('new pdf')


  const inputRef = useRef(null)

  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      handleFiles(e.dataTransfer.files[0]);
    }
    e.target.value = ''
  };

  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      handleFiles(e.target.files[0]);
    }
    e.target.value = ''
  };

  const handleFiles = (files) => {
    if (files.size > 2 * 1024 * 1024) {
      return alert("File tidak boleh melebihi dari 2mb")
    }
    // read file
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text)
      setContent(text)
    };
    reader.readAsText(files)
  }

  const onDownload = () => {
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save(`${filename}.pdf`); 
  }

  const onButtonClick = () => {
    inputRef.current.click();
  }; 

  const onReset = () => {
    setContent('')
    setFilename('')
  }

  return (
    <div className='row justify-content-around mt-5 container-fluid pt-5 text-center'>
      <h5>Convert yout .txt file to pdf here!</h5>

      <div className='row justify-content-around align-items-center'>
        <div className='col-5'>
          <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input ref={inputRef} type="file" accept="text/plain" id="input-file-upload" multiple={false} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload">
              <div>
                <p>Drag and drop your file here or</p>
                <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
              </div> 
            </label>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
          </form>
        </div>

        <div className='col-5'>
          <h6 className=''>Get your PDF Here.</h6>
          <div style={{minHeight: '100px'}}>
            <input type='text' placeholder='New filename' value={filename} className='form-control' onChange={(e) => setFilename(e.target.value)} />
            <br/>
            <button
              className='btn btn-primary'
              disabled={!content}
              onClick={onDownload}
            >
              { content ? 'Download PDF' : 'Waiting for input' }
            </button>
            &nbsp;&nbsp;
            <button
              onClick={onReset}
              disabled={!content}
              className='btn btn-danger'
            >
              Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TextToPDF