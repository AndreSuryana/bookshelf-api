import Book from '../model/Book.js';
import { composeSuccessJson, composeErrorJson } from '../util/ResponseUtil.js';

/**
 * Simulate storage
 */
const books = [];

/**
 * Books handler function.
 * @param {request} request
 * @param {handler} h
 * @return {response} response
 */
export const postBooks = (request, h) => {
    // Get payload
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    // Validation
    if (!name) {
        return h.response(composeErrorJson('Gagal menambahkan buku. Mohon isi nama buku', 'fail'))
            .type('application/json')
            .code(400);
    }

    if (readPage > pageCount) {
        return h.response(composeErrorJson('Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount', 'fail'))
            .type('application/json')
            .code(400);
    }

    // Store books
    const book = Book.create(name, year, author, summary, publisher, pageCount, readPage, reading);
    books.push(book);

    const data = { bookId: book.id };
    return h.response(composeSuccessJson(data, 'Buku berhasil ditambahkan'))
        .type('application/json')
        .code(201);
};

export const getBooks = (request, h) => {
    // Get request query
    const { name, reading, finished } = request.query;

    // Create new array
    let bookArr = books;

    // Check request query
    if (name) {
        // Filter book name
        bookArr = bookArr.filter((book) => {
            if (book.name.toLowerCase().includes(name.toLowerCase())) {
                return book;
            }
        });
    }

    if (reading) {
        const isReading = reading === '1' ? true : false;
        bookArr = bookArr.filter((book) => {
            if (book.reading === isReading) {
                return book;
            }
        });
    }

    if (finished) {
        const isFinished = finished === '1' ? true : false;
        bookArr = bookArr.filter((book) => {
            if (book.finished === isFinished) {
                return book;
            }
        });
    }

    // Return all books
    const data = {
        books: bookArr.map((book) => {
            return {
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            };
        }),
    };
    return h.response(composeSuccessJson(data))
        .type('application/json')
        .code(200);
};

export const getBook = (request, h) => {
    // Get params
    const { bookId } = request.params;

    // Search books by id
    const book = books.find((item) => item.id === bookId);

    if (book) {
        // Book founded
        const data = { book: book };
        return h.response(composeSuccessJson(data))
            .type('application/json')
            .code(200);
    } else {
        // Book not found
        return h.response(composeErrorJson('Buku tidak ditemukan', 'fail'))
            .type('application/json')
            .code(404);
    }
};

export const putBook = (request, h) => {
    // Get params
    const { bookId } = request.params;

    // Get payload
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    // Validation
    if (!name) {
        return h.response(composeErrorJson('Gagal memperbarui buku. Mohon isi nama buku', 'fail'))
            .type('application/json')
            .code(400);
    }

    if (readPage > pageCount) {
        return h.response(composeErrorJson('Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount', 'fail'))
            .type('application/json')
            .code(400);
    }

    // Search books by id
    const book = books.find((item) => item.id === bookId);

    if (!book) {
        // Book not found
        return h.response(composeErrorJson('Gagal memperbarui buku. Id tidak ditemukan', 'fail'))
            .type('application/json')
            .code(404);
    }

    // Update book
    book.update(name, year, author, summary, publisher, pageCount, readPage, reading);

    return h.response(composeSuccessJson(null, 'Buku berhasil diperbarui'))
        .type('application/json')
        .code(200);
};

export const deleteBook = (request, h) => {
    // Get params
    const { bookId } = request.params;

    // Search books by id
    const bookIndex = books.findIndex((item) => item.id === bookId);

    if (bookIndex == -1) {
        // Book not found
        return h.response(composeErrorJson('Buku gagal dihapus. Id tidak ditemukan', 'fail'))
            .type('application/json')
            .code(404);
    }

    // Delete book
    books.splice(bookIndex, 1);

    return h.response(composeSuccessJson(null, 'Buku berhasil dihapus'))
        .type('application/json')
        .code(200);
};

export const notFound = (request, h) => {
    return h.response(composeErrorJson('Not found'))
        .type('application/json')
        .code(404);
};