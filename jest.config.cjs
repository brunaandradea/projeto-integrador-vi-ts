module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['babel-jest', {
      presets: ['@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }]
  },
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: [
    'src/controllers/produtos.controller.ts',
    'src/services/produtos.service.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
