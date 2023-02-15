module.exports = {
	roots: ['<rootDir>/src'],
  collectCoverageFrom: [
		'<rootDir>/src/**/*.{ts,tsx}',
		'!<rootDir>/src/main/**/*',
		'!<rootDir>/src/domain/**/index.ts',
		'!<rootDir>/src/**/index.ts',
		'!**/*.d.ts'
	],
	coverageDirectory: 'coverage',
	testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/main/test/cypress'
  ],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
	moduleNameMapper: {
		'@/tests/(.*)': '<rootDir>/tests/$1',
		'@/(.*)': '<rootDir>/src/$1',
		'\\.scss$': 'identity-obj-proxy'
	}
}
