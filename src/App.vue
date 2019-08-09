<template>
  <div id="app">
    <app-nav/>
    <section class="section">
      <div class="columns is-centered">
        <router-view/>
      </div>
    </section>
    <app-footer/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
export default {
  name: 'app',
  components: {
    AppNav,
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
