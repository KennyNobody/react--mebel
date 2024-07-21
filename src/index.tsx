import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '0_app/App';
import '0_app/styles/index.scss';
import { StoreProvider } from '0_app/prodivers/StoreProvider';
import { ErrorBoundary } from '0_app/prodivers/ErrorBoundary';
import ThemeProvider from '0_app/prodivers/theme/ThemeProvider';
// import { initSentry } from '../scripts/initSentry';

// initSentry();

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <StoreProvider>
            <BrowserRouter>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </StoreProvider>,
    );
}
