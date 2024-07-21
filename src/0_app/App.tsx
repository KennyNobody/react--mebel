import classNames from 'classnames';
import React, { Suspense } from 'react';
import cls from './App.module.scss';
import { AppRouter } from './prodivers/router';

function App() {
    return (
        <Suspense fallback="">
            <div
                className={
                    classNames(
                        cls.app,
                    )
                }
            >
                <AppRouter />
            </div>
        </Suspense>
    );
}

export default App;
