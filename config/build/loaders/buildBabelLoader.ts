import webpack from 'webpack';
import { BuildMode, BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean;
}

export function buildBabelLoader({ isTSX }: BuildBabelLoaderProps): webpack.RuleSetRule {
    const plugins: any[][] = [
        [
            '@babel/plugin-transform-typescript',
            {
                isTSX,
            },
        ],
        ['@babel/plugin-transform-runtime'],
    ];

    if (isTSX) {
        plugins.push([
            'react-remove-properties',
            {
                properties: ['data-test'],
            },
        ]);
    }

    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins,
            },
        },
    };
}
