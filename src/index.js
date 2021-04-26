import HTTPService from './http/service.js';
import routes from './routes/index.js';

const PORT = 3000;

const httpService = new HTTPService(routes);
httpService.start(PORT);

process.on('unhandledRejection', (error, promise) => {
  console.error('unhandledRejection', error, promise)
});

process.on('uncaughtException', error => {
  console.error('uncaughtException', error)
});
