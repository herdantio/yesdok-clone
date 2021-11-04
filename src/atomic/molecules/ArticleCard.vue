<template>
  <div @click="toRoute" class="pointer w-50 m-3">
    <b-card overlay :img-src="require(`@/assets/${article.image}`)" class="rounded-lg">
      <b-card-text class="position-absolute bottom-10">
        <div class="bg-category d-inline-block rounded-lg m-1 p-1">
          <span>{{article.category}}</span>
        </div>
        <div class="bg-white m-1">
          <p class="color-yesdok h5">{{article.title}}</p>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: {}
  },
  methods: {
    toRoute(){
      this.$router.push({name: 'Article', params: {id: this.article.id}})
      window.scrollTo(0,0)
    }
  }
}
</script>

<style scoped>

</style>