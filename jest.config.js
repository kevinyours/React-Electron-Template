module.exports = {
    verbose: true,
    collectCoverageFrom: ['src/renderer/**', '!src/renderer/index.tsx', '!src/renderer/tests/**'],
    transform: { '^.+\\.ts?$': 'babel-jest' },
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
