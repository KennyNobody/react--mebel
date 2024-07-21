import * as Sentry from '@sentry/react';

const initSentry = () => {
    Sentry.init({
        dsn: 'https://4a5a4f38d7e50e9b39656aeb5aaffba3@o4506369128726528.ingest.us.sentry.io/4506982160793600',
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration({
                maskAllText: false,
                blockAllMedia: false,
            }),
        ],
        tracesSampleRate: 1.0,
        tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
    });
};

export {
    initSentry,
};
