import React from 'react';
import Component1 from './Component1'

function App() {
  return (
    <>
      <Component1
        email={"tes@gmail.com"}
        umur={12}
        nama="cah bagus"
        aktif={false}
        children={["hallo", "aman"]}
        buttonClick={() => { }}
        teman={{
          nama: "wahyu"
        }}
      />
    </>
  );
}

export default App;