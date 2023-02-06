import React from 'react';
import { Card } from 'antd'

function Component1() {
    return <>
        <Card title="Component1" bordered={false} style={{ width: 300, margin: 10 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    </>;
}

export default Component1;