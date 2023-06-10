import http from 'http'
import app from './app';

const server = http.createServer(app);
server.listen(4040, () => {
  console.log('Server', 4040, 'running...')
})