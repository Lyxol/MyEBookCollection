<script>
export default {
    props: {
        Id: String
    },
    data: () => ({
        Name: "name",
        Genre: "genre",
        Author: "author",
        Desc: "description"
    })
}
</script>
<template>
    <h2>Details of {{ this.Name }} </h2>
    <img src="" alt="Picture Ebook">
    <form id="editForm">
        <input type="text" v-model="this.Name">
        <input type="text" v-model="this.Genre">
        <input type="text" v-model="this.Author">
        <textarea id="" cols="30" rows="10" v-model="this.Desc" />
        <button id="editButton">Valider les modifications</button>
    </form>
</template>
<style>
#editForm {
    float: left;
}


form input {
    margin-bottom: 2vh;
}

#editButton {
    display: none;
}
</style>