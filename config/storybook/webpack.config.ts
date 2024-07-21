import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import {BuildMode, BuildPaths} from '../build/types/config';
import { buildStyleLoader } from '../build/loaders/buildStyleLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
        favicons: '',
        buildFavicons: '',
    };

    config?.resolve?.modules?.push(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx');

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule | null) => {
        if (rule && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config?.module?.rules?.push(buildStyleLoader(true));

    if (config.plugins) {
        // eslint-disable-next-line no-new
        new webpack.DefinePlugin({
            __API__: JSON.stringify(''),
            __IS_DEV__: JSON.stringify(true),
            __PROJECT__: JSON.stringify('storybook'),
        });
    }

    return config;
};
