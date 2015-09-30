import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import webpackDevConfig from '../../webpack.development.js';
import config from './config/config';

new webpackDevServer(webpack(webpackDevConfig), {
  hot: true,
  inline: true,
  proxy: {
   '*': `http://${config.server.host}:${config.server.port}`
  }
}).listen(config.server.webpackPort);
