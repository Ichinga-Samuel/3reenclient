module.exports = {
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
    preset: 'ts-jest',
    testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next|coverage)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest',
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/__mocks__/fileMock.js',
    },
    testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/tests/**',
        '!**/coverage/**',
        '!jest.config.js',
        '!**/*.d.ts',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
};
