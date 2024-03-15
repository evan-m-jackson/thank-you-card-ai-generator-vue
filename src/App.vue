<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/MainPage.vue'
import MainPageOptions from './components/MainPageOptions.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Welcome to the Thank You Card Generator!" />
    </div>
  </header>

  <main>
    <MainPageOptions />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
