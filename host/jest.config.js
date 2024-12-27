module.exports = {
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '^products/(.*)$': '<rootDir>/../products/src/$1',
        '^basket/(.*)$': '<rootDir>/../basket/src/$1',
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};
