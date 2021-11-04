<template>
  <div>
    <nav-bar/>
    <h1>Home Page</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    NavBar: () => import('@/atomic/organisms/NavBar')
  }
}
</script>

<style scoped>

</style>