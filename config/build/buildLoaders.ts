import webpack from 'webpack';
import { BuildMode, BuildOptions } from './types/config';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const nativeCodeBabelLoader: webpack.RuleSetRule = buildBabelLoader({ ...options, isTSX: false });
    const tsCodeBabelLoader: webpack.RuleSetRule = buildBabelLoader({ ...options, isTSX: true });

    const imageLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const styleLoader: webpack.RuleSetRule = buildStyleLoader(options.mode === BuildMode.DEV);

    return [
        imageLoader,
        svgLoader,
        nativeCodeBabelLoader,
        tsCodeBabelLoader,
        styleLoader,
    ];
}
