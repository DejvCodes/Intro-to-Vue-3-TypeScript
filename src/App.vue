<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list-page' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about-page' }">About</RouterLink> |
          <RouterLink :to="{ name: 'todo-page' }">Todo</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
  #layout {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  nav {
    padding: 30px;
  }
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  nav a.router-link-exact-active {
    color: #42b983;
  }
  h2 {
    font-size: 20px;
  }
</style>