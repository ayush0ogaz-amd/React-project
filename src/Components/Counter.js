import React, { useState } from 'react';
 function Counter() {
  // Initialize state at 0
  const [count, setCount] = useState(0);


  return (
    <div className="text-center my-4 p-3 border rounded" style={{ maxWidth: '450px', margin: '0 auto' }}>
      <h3 className="fw-bold mb-3">Simple Counter</h3>
      
      {/* Display current count */}
      <div className="display-4 fw-semibold mb-3">{count}</div>
      
      {/* Control Buttons */}
      <div className="d-flex justify-content-center gap-2">
        <button 
          className="btn btn-outline-danger px-3" 
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrease
        </button>
        
        <button 
          className="btn btn-outline-secondary px-3" 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        
        <button 
          className="btn btn-dark px-3" 
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;