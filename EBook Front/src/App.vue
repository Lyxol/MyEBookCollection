<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>My E-Book Collection</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add">Add a book</RouterLink>
      <RouterLink to="/login">Log in</RouterLink>
      <RouterLink to="/signin">Sign in</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>2022</p>
  </footer>
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  --colorOne: hsl(240, 62%, 14%);
  --colorTwo: hsl(0, 100%, 22%);
}

#app{
  background-color: hsla(0, 0%, 0%, 0.87) ;
}

header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: var(--colorOne);
  padding: 1vh;
}

h1 {
  color: white;
  padding-left:1vw ;
}

nav {
  padding-right: 3vw;
}

nav a {
  padding: 1vw;
  text-decoration: none;
  color: white;
  padding-top: 2.5vh;
  padding-bottom: 1.5vh;
}

nav a:hover{
  background-color: var(--colorTwo);
}

main {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  color: white;
  margin-top:  5vh; ;
}

footer {
  color: white;
  background-color: var(--colorTwo);
  display: flex;
  justify-content: center;
  padding-bottom: 2vh;
}
</style>
