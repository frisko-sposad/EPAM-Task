import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

type ErrorBoundaryProps = { children: ReactNode };

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch?(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): ReactNode {
    const { errorInfo, error } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div>
          <div>Something went wrong!!!</div>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
