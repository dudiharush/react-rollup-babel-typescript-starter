import html from '@rollup/plugin-html';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import pageLayoutTemplate from './layout-template';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
  ];

module.exports = {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  manualChunks(id) {
    if (id.includes('node_modules')) {
      return 'vendor';
    }
  },
  plugins: [
    html({template: pageLayoutTemplate}),
    
    // Allows node_modules resolution
    resolve({ 
        extensions,
        jsnext: true,
        main: true,
        browser: true,
     }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, exclude: 'node_modules/**' }),
    postcss({
        extract: true,
     }),
    replace({
        'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || 'development' )
      }),
      serve({
        contentBase: 'dist',
        port: 5000,
        historyApiFallback: true,
        historyApiFallback: 'index.html'
     }), 
    livereload()
    ]
};