import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import passport from 'passport';
import session from 'express-session'
import config from './config/config';
import secrets from './config/secrets';

import restRoutes from './routes/rest';

const app = global.app = express();

app.use(express.static('assets'));
app.use(morgan());
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(session({ secret: 'Shhh tell me a secret' }));

app.use(passport.initialize());
app.use(passport.session());

var publicPath = path.resolve(__dirname, '../../dist');
app.use(express.static(publicPath));

mongoose.connect(`mongodb://${secrets.db.username}:${secrets.db.password}@${secrets.db.host}:${secrets.db.port}/${secrets.db.database}`);

// Routes
app.use('/api', restRoutes);

app.get('/', (req, res) => {
  res.send('/dist/index.html');
});

app.use((req, res, next) => {
  res.status(404).send('This is not the page you are looking for');
});

app.use((err, req, res, next) => {
  res.status(500).send(`Sorry, there seems to be a problem - ${err}`);
});

// Http server
app.listen(config.server.port, () => {
  console.log('Server listening at http://%s:%s', config.server.host, config.server.port);
});

export default app;
