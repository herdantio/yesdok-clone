<template>
  <div>
    <div class="bg-category d-inline-block m-1 p-1">
      <span class="text-white">{{category}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCategory",
  props: {
    category: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>

</style>