import type { Preview } from '@storybook/react';
import { StyleDecorator } from '5_shared/libs/decorators/StyleDecorator';
import { ThemeDecorator } from '5_shared/libs/decorators/ThemeDecorator';
import { AppTheme } from '5_shared/config/ThemeContext';
import { RouterDecorator } from '5_shared/libs/decorators/RouterDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => <RouterDecorator><Story /></RouterDecorator>,
        (Story) => <ThemeDecorator theme={AppTheme.LIGHT}><Story /></ThemeDecorator>,
        (Story) => <StyleDecorator><Story /></StyleDecorator>,
    ],
};

export default preview;
