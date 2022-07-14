import { Suspense } from "react";

import AppRoutes from "./AppRoutes";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import Loader from "./components/Loader";

function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <AppRoutes />
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
