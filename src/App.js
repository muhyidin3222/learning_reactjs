import React, { Suspense, lazy } from 'react';
import { Skeleton } from 'antd'

const Component1 = lazy(() => import('./Component1'));
const Component2 = lazy(() => delayForDemo(import('./Component2')));
const Component3 = lazy(() => delayForDemo(import('./Component3')));

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 500);
  }).then(() => promise);
}

function App() {
  return <Suspense fallback={<Skeleton />}>
    <div style={{ display: 'flex' }}>
      <Component1 />
      <Suspense fallback={<Skeleton />}>
        <Component2 />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Component3 />
      </Suspense>
    </div>
  </Suspense>
    ;
}

export default App;