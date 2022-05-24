<script>
export default {
    data: () => ({
        email: "",
        password: ""
    }),methods:{
        validateSignUp(){

        }
    }
}
</script>
<template>
    <h2>Sign-up</h2>
    <form @submit="validateSignUp" id="signForm">
        <label for="email">Email:</label>
        <input type="email" v-model="email">
        <label for="password">Password:</label>
        <input type="password" v-model="password">
        <button>validate</button>
    </form>
</template>
<style>
#signForm {
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}
</style>