<script>
export default {
    data: () => ({
        email: "",
        password: ""
    })
}
</script>
<template>
    <h2>Log-in</h2>
    <form action="" id="loginForm">
        <label for="email">Email:</label>
        <input type="email" v-model="email">
        <label for="password">Password:</label>
        <input type="password" v-model="password">
        <button>validate</button>
        <p>Don't have an account ? <router-link to="/signup" id="toSignup">click here</router-link>
        </p>
    </form>
</template>
<style>
#loginForm {
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}

#toSignup{
    text-decoration: none;
}
</style>