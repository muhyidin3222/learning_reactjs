import React from 'react';
import { Card } from 'antd'

function Component3() {
    return <>
        <Card title="Component3" bordered={false} style={{ width: 300, margin: 10 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    </>;
}

export default Component3;