import webpack from 'webpack';
import { BuildMode, BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            clean: true,
            publicPath: '/',
            path: paths.build,
            filename: 'js/bundle.[contenthash].js',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: mode === BuildMode.DEV ? 'inline-source-map' : undefined,
        devServer: mode === BuildMode.DEV ? buildDevServer(options) : undefined,
        target: 'web',
    };
}
