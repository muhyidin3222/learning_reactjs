import React from 'react';
import { useSelector } from "react-redux";

function Component3() {
  const { user } = useSelector(state => state)
  return <>
    <h4>Component3</h4>
    {JSON.stringify(user)}
  </>;
}

export default Component3;