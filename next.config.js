const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/assets/styles/scss')],
    },
    env: {
        APP_BASE_URL: process.env.APP_BASE_URL,
    },
};

const plugins = [
    [
        withImages({
            fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'ico'],
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            webpack(config, options) {
                config.resolve.modules.push(path.resolve('./'));
                return config;
            },
        }),
    ],
    [
        withPWA({
            pwa: {
                disable: process.env.NODE_ENV === 'development',
                dest: 'public',
            },
        }),
    ],
];

module.exports = withPlugins([...plugins], nextConfig);
