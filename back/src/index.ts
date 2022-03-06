import { server } from './server';

server.listen(process.env.PORT || process.env.API_PORT || '9070');
