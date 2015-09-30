require("babel/register");
require('./src/server/index.js');
if (process.env.NODE_ENV == 'development') {
	require('./src/server/dev-server.js');
}
