import React from 'react';
import { useSelector } from "react-redux";

function Component2() {
  const { user } = useSelector(state => state)
  return <>
    <h4>Component2</h4>
    {JSON.stringify(user)}
  </>;
}

export default Component2;