import React from 'react'
import { Alert } from 'antd'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <Alert
                        message={this.state.error && this.state.error.toString()}
                        showIcon
                        description={
                            <details style={{ whiteSpace: 'pre-wrap' }}>
                                {this.state.errorInfo.componentStack}
                            </details>
                        }
                        type="error"
                    />
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}
