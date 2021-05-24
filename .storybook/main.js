module.exports = {
    // stories: ['../src/stories/*.stories.@(ts|tsx|js|jsx|mdx)'],
    stories: [
        '../src/components/CustomerCare/*.stories.@(ts|tsx|js|jsx|mdx)',
        '../src/stories/*.stories.@(ts|tsx|js|jsx|mdx)',
        '../src/components/**/*.stories.@(ts|tsx|js|jsx|mdx)',
        '../src/components/CustomerCare/*.stories.@(ts|tsx|js|jsx|mdx)',
        '../src/components/CustomerSuccessTeam/*.stories.@(ts|tsx|js|jsx|mdx)',
    ],
    addons: [
        '@storybook/preset-scss',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        '@storybook/addon-backgrounds',
        '@storybook/addon-docs',
        'storybook-addon-jsx',
    ],
};
