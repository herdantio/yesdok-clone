<template>
  <div>
    <b-navbar toggleable="lg" class="bg-yesdok" type="dark">
      <b-navbar-brand to="/">
        <b-img :src="require('@/assets/yesdok-logo.png')" width="120%"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">
            <span class="text-white h4">Beranda</span>
          </b-nav-item>
          <b-nav-item-dropdown>
            <template #button-content>
              <span class="h4 text-white">Artikel</span>
            </template>
            <b-dropdown-item v-for="category in getArticleCategory" :key="category" href="#">
              {{category}}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">
            <span class="text-white h4">Store</span>
          </b-nav-item>
          <b-nav-item href="#">
            <span class="text-white h4">Hubungi Kami</span>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" right>
            <span class="text-white h4">Daftar / Masuk</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters('article', [
        'getArticleCategory'
    ])
  }
}
</script>

<style scoped>

</style>