const config = {
	server: {
		port: process.env.PORT || 3000,
		webpackPort: process.env.WEBPACK_PORT || 3001,
		host: process.env.HOST || 'localhost'
	}
};

export default config;
