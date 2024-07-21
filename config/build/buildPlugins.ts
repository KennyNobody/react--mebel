import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BuildMode, BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths } = options;

    const plugins: webpack.WebpackPluginInstance[] = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:4].css',
            chunkFilename: 'css/[name].[contenthash:4].css',
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.mode === BuildMode.DEV),
            __PROJECT__: JSON.stringify(options.project),
            __BASE_URL__: JSON.stringify(options.baseUrl),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.locales,
                    to: paths.buildLocales,
                },
                {
                    from: paths.favicons,
                    to: paths.buildFavicons,
                },
            ],
        }),
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ];

    if (options.mode === BuildMode.DEV) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
