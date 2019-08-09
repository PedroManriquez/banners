<template>
  <div class="column is-half-desktop is-three-quarters-tablet">
    <h3 class="is-size-3">
      Banners
    </h3>
    <hr>
    <div class="field is-grouped">
      <div class="control is-expanded">
        <input class="input" type="number" placeholder="F. ID" min="0" max="6" step="1" v-model="id">
      </div>
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="F. Tamaño" v-model="size">
      </div>
      <div class="control is-expanded">
        <div class="select">
          <select v-model="type">
            <option value="All">Todos</option>
            <option value="Desktop">Escritorio</option>
            <option value="Mobile">Móvil</option>
          </select>
        </div>
      </div>
    </div>
    <table class="table is-fullwidth is-bordered is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Tamaño</th>
          <th>Nombre archivo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="banner in bannersFiltered" v-bind:key="banner.id"> <!-- show all data on table -->
          <th>{{ banner.id }}</th>
          <td>{{ banner.name }}</td>
          <td>{{ banner.size }}</td>
          <td>{{ `${banner.size} ${banner.name}.zip` }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { banners } from '@/services'
export default {
  name: 'home',
  data: () => ({
    banners: [],
    id: '',
    size: '',
    type: 'All'
  }),
  computed: {
    bannersFiltered() {
      let id = this.id === '' ? 0 : parseInt(this.id)
      return this.banners.filter(banner => {
        return (banner.id === id || id === 0)
          && (banner.type === this.type || this.type === 'All')
          && (this.size === '' || banner.size.toLowerCase().indexOf(this.size.toLowerCase()) > -1)
      })
    }
  },
  created() {
    banners.all() // mock api call
      .then(response => {
        this.banners = response.body
        console.log(this.banners)
      })
      .catch(err => {
        if (err.errors) {
          console.log(err.msg)
        }
      })
  }
}
</script>

<style scoped>
  .section {
    margin: 0em 1em !important;
  }
  select {
    width: 100%;
  }
</style>
