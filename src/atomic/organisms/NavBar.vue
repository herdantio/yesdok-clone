<template>
  <div>
    <b-navbar toggleable="lg" class="bg-yesdok" type="dark">
      <b-navbar-brand href="#">
        <b-img src="https://www.yesdok.com/img/headeryesdok.png" width="120%"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <span class="text-white h4">Beranda</span>
          </b-nav-item>
          <b-nav-item-dropdown>
            <template #button-content>
              <span class="h4 text-white">Artikel</span>
            </template>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown>
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
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>