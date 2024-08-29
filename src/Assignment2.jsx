import React, {useState} from 'react';

function Assignment2() {
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isStarted, setIsStarted] = useState(false); // New state variable

  const handleStartClick = () => {
    setStartTime(performance.now());
    setDuration(null); // Reset duration
    setIsStarted(true); // Set the start flag to true
  };

  const handleEndClick = () => {
    if (startTime && isStarted) {
      const endTime = performance.now();
      const timeElapsed = (endTime - startTime) / 1000; // Convert to seconds
      setDuration(timeElapsed);
      setIsStarted(false); // Set the start flag to false
    }
  };

  return (
    <div className="assignment2">
      <button
        className={`px-4 py-2 border border-black ${isStarted ? 'bg-green-500' : ''} hover:${isStarted ? 'bg-green-500' : 'bg-gray-200'} rounded-sm `}
        onClick={handleStartClick}>
        Start
      </button>
      <button
        className="px-4 py-2 border border-black ml-4 hover:bg-gray-200 active:bg-gray-600 rounded-sm"
        onClick={handleEndClick}>
        End
      </button>
      {duration ?
        <p className="mt-4">
          Timer : {duration.toFixed(2)} seconds
        </p>
        : isStarted && <p className="mt-4">Timer is running...</p>
      }
    </div>
  );
}

export default Assignment2;
