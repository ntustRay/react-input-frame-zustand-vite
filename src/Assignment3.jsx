import React, {useState, useEffect} from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import assignment3 from './assignment3.txt';

function Assignment3() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(assignment3)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="assignment3">
      <MarkdownPreview data-color-mode={'dark'} className='p-4 text-left' source={markdown} />
    </div>
  );
}

export default Assignment3;
