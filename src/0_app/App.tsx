import classNames from 'classnames';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { useFetchMain } from '0_app/api/appApi';
import { Footer } from '2_widgets/Footer';
import { Header } from '2_widgets/Header';
import { ScrollPage } from '3_features/ScrollPage';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import useLayoutMode from '5_shared/libs/hooks/useLayoutMode';
import { getMenuMobileIsOpened } from '3_features/MenuMobile';
import cls from './App.module.scss';
import { AppRouter } from './prodivers/router';

function App() {
    const { theme } = useTheme();

    const {
        data,
        isLoading,
    } = useFetchMain(null);

    const layoutMode = useLayoutMode();
    const menuOpened = useSelector(getMenuMobileIsOpened);

    // Раскомментировать, чтобы протестировать сообщение об ошибке
    // useEffect(() => {
    //     throw new Error();
    // }, []);

    return (
        <Suspense fallback="">
            <div
                className={
                    classNames(
                        cls.app,
                        cls[`app--${theme}`],
                        { [cls['app--fixed']]: menuOpened },
                    )
                }
            >
                <Header
                    data={data?.data}
                    isLoading={isLoading}
                    className={
                        classNames(
                            cls.header,
                            cls[`header--${layoutMode}`],
                        )
                    }
                />
                <ScrollPage>
                    <HelmetProvider context={{}}>
                        <AppRouter />
                    </HelmetProvider>
                </ScrollPage>
                <Footer
                    data={data?.data}
                    isLoading={isLoading}
                    className={cls.footer}
                />
            </div>
        </Suspense>
    );
}

export default App;
