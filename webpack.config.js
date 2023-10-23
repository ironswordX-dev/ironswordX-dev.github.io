const glob = require('glob');
const path = require('path');
const fs = require('fs');

module.exports = {
  entry: {
    app: './src/index.js',
    ...glob.sync('./node_modules/**/package.json').reduce((acc, path) => {
      const packageName = JSON.parse(fs.readFileSync(path)).name;
      const packageMain = JSON.parse(fs.readFileSync(path)).main;
      acc[packageName] = `./node_modules/${packageName}/${packageMain}`;
      return acc;
    }, {}),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "assert": false,
      "buffer": false,
      "child_process": false,
      "cluster": false,
      "console": false,
      "constants": false,
      "crypto": false,
      "dgram": false,
      "dns": false,
      "domain": false,
      "events": false,
      "fs": false,
      "http": false,
      "https": false,
      "module": false,
      "net": false,
      "os": false,
      "path": false,
      "perf_hooks": false,
      "process": false,
      "punycode": false,
      "querystring": false,
      "readline": false,
      "repl": false,
      "stream": false,
      "_stream_duplex": false,
      "_stream_passthrough": false,
      "_stream_readable": false,
      "_stream_transform": false,
      "_stream_writable": false,
      "string_decoder": false,
      "sys": false,
      "timers": false,
      "tls": false,
      "trace_events": false,
      "tty": false,
      "url": false,
      "util": false,
      "v8": false,
      "vm": false,
      "worker_threads":false, 
       // add any other built-in modules you want to exclude here
    }
  }
};