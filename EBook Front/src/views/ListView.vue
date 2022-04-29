<script>
import EbookModel from "../model/EbookModel.js"
import Ebook from "../components/Ebook.vue"
export default {
    data: () => ({
        listBook: []
    }),
    mounted() {
        //debug
        for (let i = 0; i < 5; i++) {
            let book = new EbookModel(i, "test", i + 1 * 10, "this is a test","test","Lyxol");
            this.listBook.push(book);
            console.log("add elements: " + book.getId());
        }
    },
    components: { Ebook }
}
</script>
<template>
    <form>
        <label for="search">search book:</label>
        <input type="text">
    </form>
    <div v-for="item in listBook" :key="item.getId()">
        <Ebook :bookData="item" />
    </div>
</template>
<style>
</style>