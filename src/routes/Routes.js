import * as Handler from '../handler/ResponseHandler.js';

export const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: Handler.postBooks,
    },

    {
        method: 'GET',
        path: '/books',
        handler: Handler.getBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: Handler.getBook,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: Handler.putBook,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: Handler.deleteBook,
    },
    {
        method: '*',
        path: '/{any*}',
        handler: Handler.notFound,
    },
];

export default routes;