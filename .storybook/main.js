module.exports = {
    stories: ['../src/components/CustomerSuccessTeam/*.stories.@(ts|tsx|js|jsx|mdx)'],
    addons: [
        '@storybook/preset-scss',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        '@storybook/addon-backgrounds',
        '@storybook/addon-docs',
    ],
};