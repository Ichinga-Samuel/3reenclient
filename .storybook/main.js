module.exports = {
    stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/preset-scss',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        '@storybook/addon-backgrounds',
        '@storybook/addon-docs/react',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [require.resolve('babel-preset-react-app')],
            },
        });

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
