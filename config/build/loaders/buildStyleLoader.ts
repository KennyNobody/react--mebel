import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildMode } from '../types/config';

export function buildStyleLoader(isDev: boolean): webpack.RuleSetRule {
    return {
        test: /\.(sa|sc|c)ss$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (path: string) => path.includes('.module'),
                        localIdentName: BuildMode.DEV ? '[path][name]__[local]-[hash:base64:5]' : '[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    };
}
