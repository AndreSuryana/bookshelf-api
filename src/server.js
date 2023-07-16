import { server as hapiServer } from '@hapi/hapi';
import routes from './routes/Routes.js';

const start = async () => {
    // Create server
    const server = hapiServer({
        port: 9000,
        host: 'localhost',
    });

    // Add routes
    server.route(routes);

    // Start server
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

// Start server
start();