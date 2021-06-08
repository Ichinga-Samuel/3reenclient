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
    async rewrites() {
        return [
            {
                source: '/vendor',
                destination: '/vendor/login',
            },
        ];
    },
};

// const routing = async rewrites() {};

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

module.exports = {
    //...other configs
    
    webpack: (config, {}) => {
        config.module.rules.push({
                test: [/\.svg$/, /\.woff$/],
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    publicPath: `/_next/static/images/`, //specify the base path
                    outputPath: 'static/images', //and output path
                }
        })
        return config
    }
}
