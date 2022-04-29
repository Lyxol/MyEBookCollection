<script>

export default {
    props: {
        bookData: Object
    }
}
</script>
<template>
    <router-link :to="'/edit?id=' + this.bookData.getId()">
        <p> {{ this.bookData.getId() }} </p>
        <p> {{ this.bookData.getName() }} </p>
        <p> {{ this.bookData.getNbPage() }} </p>
    </router-link>
</template>
<style>
</style>