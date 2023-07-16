import { nanoid } from 'nanoid';

/**
 * Data model for Book.
 */
class Book {

    /**
     * Default constructors.
     * @param {string} id
     * @param {string} name
     * @param {number} year
     * @param {string} author
     * @param {string} summary
     * @param {string} publisher
     * @param {number} pageCount
     * @param {number} readPage
     * @param {boolean} finished
     * @param {boolean} reading
     * @param {date} insertedAt
     * @param {date} updatedAt
     */
    constructor(id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.author = author;
        this.summary = summary;
        this.publisher = publisher;
        this.pageCount = pageCount;
        this.readPage = readPage;
        this.finished = finished;
        this.reading = reading;
        this.insertedAt = insertedAt;
        this.updatedAt = updatedAt;
    }

    /**
     * Function to create new instance of Book.
     * @param {string} name
     * @param {number} year
     * @param {string} author
     * @param {string} summary
     * @param {string} publisher
     * @param {number} pageCount
     * @param {number} readPage
     * @param {boolean} reading
     * @return {Book} book
     */
    static create(name, year, author, summary, publisher, pageCount, readPage, reading) {
        const date = new Date();
        const now = date.toISOString();
        const finished = pageCount === readPage;

        return new Book(nanoid(16), name, year, author, summary, publisher, pageCount, readPage, finished, reading, now, now);
    }

    /**
     * Function to update the instance of Book.
     * @param {string} name
     * @param {number} year
     * @param {string} author
     * @param {string} summary
     * @param {string} publisher
     * @param {number} pageCount
     * @param {number} readPage
     * @param {boolean} reading
     */
    update(name, year, author, summary, publisher, pageCount, readPage, reading) {
        this.name = name;
        this.year = year;
        this.author = author;
        this.summary = summary;
        this.publisher = publisher;
        this.pageCount = pageCount;
        this.readPage = readPage;
        this.finished = pageCount == readPage;
        this.reading = reading;
        this.updatedAt = new Date().toISOString();
    }
}

export default Book;