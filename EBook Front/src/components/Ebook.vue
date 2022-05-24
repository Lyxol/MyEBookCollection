<script>

export default {
    props: {
        bookData: Object
    }
}
</script>
<template>
    <router-link class="ebook" :to="'/edit?id=' + this.bookData.getId()">
        <img src="" alt="Ebook Preview">
        <h3> {{ this.bookData.getName() }} </h3>
        <div>
            <p> {{ "by " + this.bookData.getAuthor() }} </p>
            <p> {{ this.bookData.getGenre() }} </p>
        </div>
    </router-link>
</template>
<style>
.ebook {
    text-decoration: none;
    background-color: hsl(0, 0%, 99%);
    padding: 1vw;
    border-radius: 15px;
    border: 5px solid black;
    color: black;
}

.ebook:hover{
    border: 5px solid var(--colorOne);
}

.ebook div {
    display: flex;
}

.ebook div p {
    margin: 3ch;
}

h3 {
    display: flex;
    justify-content: center;
}
</style>