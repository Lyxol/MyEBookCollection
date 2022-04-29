export default class EbookModel {
    constructor(id, name, nbPage, desc, genre, author) {
        this.id = id
        this.name = name
        this.nbPage = nbPage
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

    getNbPage() {
        return this.nbPage
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