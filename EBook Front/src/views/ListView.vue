<script>
import EbookModel from "../model/EbookModel.js"
import Ebook from "../components/Ebook.vue"
export default {
    data: () => ({
        listBook: []
    }),
    mounted() {
        //debug
        for (let i = 0; i < 3; i++) {
            let book = new EbookModel(i, "Test" + i, i + 1 * 10, "this is a test", "test", "Lyxol");
            this.listBook.push(book);
        }
    },
    components: { Ebook }
}
</script>
<template>
    <router-link id="add" to="/add">Add a book</router-link>
    <h2>Your Collection</h2>
    <div id="listBook">
        <Ebook v-for="item in listBook" :key="item.getId()" :bookData="item" />
    </div>
</template>
<style>
#listBook {
    display: flex;
    justify-content: space-around;
}

#add{
    float: left;
    text-decoration: none;
    padding: 1vw;
    background-color: white;
    border-radius: 25px;
    color: black;
}

#add:hover{
    color: white;
    background-color: var(--colorOne);
}
</style>