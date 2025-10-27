import type { Config } from 'jest';

const config: Config = {
  rootDir: '../../',
  testEnvironment: 'jsdom',

  preset: "ts-jest",
  transform: { "^.+\\.tsx?$": "ts-jest" },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.css$': 'identity-obj-proxy',
  },

  moduleDirectories: [
    "node_modules"
  ],

  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.ts', '!src/**/main.tsx'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],

  clearMocks: true,
};

export default config;