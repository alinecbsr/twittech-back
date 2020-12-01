require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
});

const { app, server } = require('./src/app');

server.listen(process.env.TWB_PORT,'0.0.0.0', () => {
  console.log(`${process.env.TWB_NAME} listening on port: ${process.env.TWB_PORT}`);
});