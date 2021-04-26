import express from 'express';
import bodyParser from 'body-parser';

const app = express()

class HTTPService {
  constructor (routes) {
    app.use(bodyParser.json({ limit: '10mb' }))
    app.use('/api/', routes);
  }

  async start(port) {
    app.listen(port, () => {
      console.log(`app listen on ${port} port`)
    });
  }
}

export default HTTPService;
