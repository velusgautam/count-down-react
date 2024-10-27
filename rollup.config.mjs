import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript()],
  external: ['react', 'react-dom'],
}
