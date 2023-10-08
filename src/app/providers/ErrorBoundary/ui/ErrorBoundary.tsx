import ErrorPage from 'widgets/ErrorPage/ui/ErrorPage';
import { Component, ErrorInfo, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

interface IState {
    hasError: boolean
}

export class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error : Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error : Error, info: ErrorInfo) {
        // logErrorToMyService(error, info.componentStack);
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
        // You can render any custom fallback UI
            return <ErrorPage />;
        }

        return children;
    }
}

export default ErrorBoundary;
