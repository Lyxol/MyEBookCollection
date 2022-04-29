<script>
export default {
    data: () => ({
        file: null,
        name: "",
        author: "",
        genre: "",
        desc: ""
    }),
    methods: {
        onFileClick() {
            this.$refs.fileInput.click()
        }
    }
}
</script>
<template>
    <h2>Add your book</h2>
    <form action="" id="addForm">
        <input type="button" value="Add your book here" @click="onFileClick">
        <input type="file" ref="fileInput">
        <label for="name">Book's name:</label>
        <input type="text" v-model="name">
        <label for="genre">Book's genre:</label>
        <input type="text" v-model="genre">
        <label for="author">Author:</label>
        <input type="text" v-model="author">
        <label for="desc">Description:</label>
        <textarea name="" id="" cols="30" rows="10" v-model="desc" />
        <button id="addButton">validate</button>
    </form>
</template>
<style>
#addForm {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

input[type="file"] {
    display: none;
}

#addButton,
input[type="button"] {
    border-radius: 15px;
    padding: 10px;
    border: none;
}

#addButton {
    margin-top: 15px;
}
</style>