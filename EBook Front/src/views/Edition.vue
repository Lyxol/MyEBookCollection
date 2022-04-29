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
    <form>
        <input type="text" v-model="this.Name">
        <input type="text" v-model="this.Genre">
        <input type="text" v-model="this.Author">
        <textarea id="" cols="30" rows="10" v-model="this.Desc"/>
        <button>Valider les modifications</button>
    </form>
</template>
<style>
form{
    width: 20%;
    float: left;
    display: flex;
    flex-direction: column;
    padding: 1vh;
    background-color: var(--colorOne);
    border-radius: 20px;
}

form input{
    margin-bottom: 2vh;
}

button{
    display: none;
}
</style>