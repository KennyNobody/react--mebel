import classNames from 'classnames';
import React, { Suspense } from 'react';
import { Sidebar } from '2_widgets/Sidebar';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container/Container';
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
                <Container className={classNames()}>
                    <div className={classNames(grid.grid)}>
                        <aside className={classNames(grid.grid__col, grid['grid__col--2'])}>
                            <Sidebar />
                        </aside>
                        <div className={classNames(grid.grid__col, grid['grid__col--6'])}>
                            <AppRouter />
                        </div>
                    </div>
                </Container>
            </div>
        </Suspense>
    );
}

export default App;
