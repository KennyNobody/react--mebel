import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
    BuildEnv,
    BuildMode,
    BuildPaths,
} from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, 'src'),
        build: path.resolve(__dirname, 'docs'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'docs', 'locales'),
        favicons: path.resolve(__dirname, 'public', 'favicons'),
        buildFavicons: path.resolve(__dirname, 'docs', 'favicons'),
    };

    return buildWebpackConfig({
        paths,
        port: env.port || 3001,
        mode: env.mode || BuildMode.DEV,
        baseUrl: env.baseUrl || 'https://api.egor-badulin.ru',
        project: env.project || 'frontend',
    });
};
