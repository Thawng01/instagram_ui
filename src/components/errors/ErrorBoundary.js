import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("error: " + error, "error info : " + errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h4 style={{ padding: 10 }}>Something went wrong!</h4>;
        }

        return this.props.children;
    }
}
