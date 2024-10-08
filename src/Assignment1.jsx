import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [frameWidth, setFrameWidth] = useState('400px');
  const [text, setText] = useState('Text field');
  const [textAreaHeight, setTextAreaHeight] = useState(40);
  const textAreaRef = useRef(null);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
    if (isEditable) {
      textAreaRef.current.focus();
      textAreaRef.current.select();
    }
  };

  const toggleResize = () => {
    setFrameWidth(frameWidth === '400px' ? '800px' : '400px');
  };

  const textAreaOnChange = (e) => {
    setTextAreaHeight(e.target.scrollHeight);
    setText(e.target.value);
  }

  return (
    <div className='flex items-center justify-center m-auto' >
      <div id="frame" className='flex justify-center p-8 border border-red-600 min-h-[400px] h-fit rounded'
        style={{width: frameWidth}}>
        <div id='left' className="flex w-full m-1">
          {isEditable ?
            <textarea
              placeholder={'Text field'}
              value={text}
              onChange={(e) => textAreaOnChange(e)}
              className="w-full border-2 border-black max-h-fit h-fit p-2"
              ref={textAreaRef}
              style={{height: textAreaHeight + 'px'}}
            /> :
            <p className='w-full word break-all whitespace-pre-wrap text-left'>
              {text}
            </p>}
        </div>
        <div id='right' className='flex flex-col shrink-0'>
          <button onClick={toggleEdit} className='w-16 p-2 m-1 bg-blue-500 text-white rounded-sm'>Edit</button>
          <button onClick={toggleResize} className='w-16 p-2 m-1 bg-blue-500 text-white rounded-sm'>Resize</button>
        </div>
      </div>
    </div>
  );
}

export default App;
