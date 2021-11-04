<template>
  <div v-html="body"></div>
</template>

<script>
export default {
  name: "ArticleBody",
  props: {
    body: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>

</style>