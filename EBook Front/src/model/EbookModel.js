export default class EbookModel {
    constructor(id, name, desc, genre, author) {
        this.id = id
        this.name = name
        this.desc = desc
        this.genre = genre
        this.author = author
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getDesc() {
        return this.desc
    }

    getGenre() {
        return this.genre
    }

    getAuthor() {
        return this.author
    }
}