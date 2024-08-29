import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Assignment1 from './Assignment1';
import Assignment2 from './Assignment2';
import Assignment3 from './Assignment3';

const getCurrentAssignment = () => {
  switch (window.location.pathname) {
    case '/':
      return 'Assignment 1';
    case '/assignment2':
      return 'Assignment 2';
    case '/assignment3':
      return 'Assignment 3';
    default:
      return 'Assignment 1';
  }
};

function App() {
  const [currentAssignment, setCurrentAssignment] = useState(getCurrentAssignment());


  return (
    <Router basename="/react-input-frame-zustand-vite">
      <Routes>
        <Route path="/" element={<Assignment1 />} />
        <Route path="/assignment2" element={<Assignment2 />} />
        <Route path="/assignment3" element={<Assignment3 />} />
      </Routes>
      <div className='mt-11 justify-center'>
        <div className='m-4'>
          {'current assignment: ' + currentAssignment}
        </div>
        <Link
          className='p-2 m-1 bg-blue-900 text-white rounded-sm'
          to="/"
          onClick={() => setCurrentAssignment('Assignment 1')}
        >
          Assignment 1
        </Link>
        <Link
          className='p-2 m-1 bg-blue-900 text-white rounded-sm'
          to="/assignment2"
          onClick={() => setCurrentAssignment('Assignment 2')}
        >
          Assignment 2
        </Link>
        <Link
          className='p-2 m-1 bg-blue-900 text-white rounded-sm'
          to="/Assignment3"
          onClick={() => setCurrentAssignment('Assignment 3')}
        >
          Assignment 3
        </Link>
      </div>
    </Router>
  );
}

export default App;
