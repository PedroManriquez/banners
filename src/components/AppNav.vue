<template>
  <nav class="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="javascript:;">
        <img src="../assets/img/bulma-logo.png" width="115" height="30">
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'appNav',
  data: () => ({
    isOpen: false
  })
}
</script>
