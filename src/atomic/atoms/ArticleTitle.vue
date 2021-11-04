<template>
  <span class="h1 color-yesdok">{{title}}</span>
</template>

<script>
export default {
  name: "ArticleTitle",
  props: {
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>

</style>