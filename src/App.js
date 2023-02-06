import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Component1 from './Component1'
import Component2 from './Component2'

function App
  () {
  return (
    <div>
      <ErrorBoundary>
        <Component1 />
      </ErrorBoundary>

      <ErrorBoundary>
        <Component2 />
      </ErrorBoundary>
    </div>
  );
}

export default App;