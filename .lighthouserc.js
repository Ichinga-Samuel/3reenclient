module.exports = {
    ci: {
        collect: {
            staticDistDir: '.next',
        },
        assert: {
            preset: 'lighthouse:recommended',
            assertions: {
                'offscreen-images': 'off',
                'uses-webp-images': 'off',
                'color-contrast': 'off',

                'apple-touch-icon': 'off',
                'maskable-icon': 'off',
                'installable-manifest': 'off',
                'offline-start-url': 'off',
                'service-worker': 'off',
                'splash-screen': 'off',
                'themed-omnibox': 'off',
                'works-offline': 'off',

                'document-title': 'off',
                'errors-in-console': 'off',
                'html-has-lang': 'off',
                'meta-description': 'off',
            },
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: 'https://fathomless-basin-58227.herokuapp.com/',
        },
    },
};
