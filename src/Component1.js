import React from 'react';
import { Card } from 'antd'
import PropsType from 'prop-types'

function Component1({
    email,
    umur,
    nama,
    aktif,
    children,
    buttonClick,
    teman,
}) {
    console.log(teman)
    return <>
        <Card title="Component1" bordered={false} style={{ width: 300, margin: 10 }}>
            <p>{email}</p>
            <p>{umur}</p>
            <p>{nama}</p>
            <button onClick={buttonClick} >Click</button>
        </Card>
    </>;
}

Component1.propTypes = {
    email: PropsType.string,
    umur: PropsType.oneOf([12, 13]),
    nama: PropsType.string.isRequired,
    aktif: PropsType.bool,
    children: PropsType.arrayOf(PropsType.string),
    buttonClick: PropsType.func.isRequired,
    teman: PropsType.objectOf(PropsType.string),
}

export default Component1;