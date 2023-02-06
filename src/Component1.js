import React, { useState } from 'react';
import { Card } from 'antd'

function Component1() {
    const [count, setcount] = useState(1)
    if (count === 3) {
        throw new Error("Error Component1")
    }
    return <>
        <Card title="Component1" bordered={false} style={{ width: 300, margin: 10 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            {count}
            <button onClick={() => setcount(count + 1)}>Click count</button>
        </Card>
    </>;

}

export default Component1;