import { nanoid } from 'nanoid'

class Book {

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

    static create(name, year, author, summary, publisher, pageCount, readPage, reading) {
        const date = new Date();
        const now = date.toISOString();
        const finished = pageCount === readPage;

        return new Book(nanoid(16), name, year, author, summary, publisher, pageCount, readPage, finished, reading, now, now);
    }

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