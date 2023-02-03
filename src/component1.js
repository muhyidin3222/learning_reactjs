import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { GET_USER } from './type';

function Component1() {
    const { user } = useSelector(state => state)
    const dispatch = useDispatch()
    const actionChangeUser = () => {
        dispatch({
            type: GET_USER,
            data: {
                name: "jamal",
                alamat: "blm diketahui"
            }
        })
    }
    return <>
        <h4>Component1</h4>
        <button onClick={actionChangeUser}>change store user</button>
        <div>  {JSON.stringify(user)}</div>
    </>;
}

export default Component1;