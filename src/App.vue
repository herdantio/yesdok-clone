<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    NavBar: () => import('@/atomic/organisms/NavBar')
  }
}
</script>
<style lang="scss">

</style>
