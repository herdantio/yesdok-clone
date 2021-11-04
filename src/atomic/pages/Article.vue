<template>
  <b-container>
    <div>
      <b-img class="w-100 mt-5" :src="require(`@/assets/${article.image}`)"/>

      <article-category :category="article.category"/>
      <article-title :title="article.title" class="mt-3"/>

      <article-body :body="article.body" class="mt-3"/>
    </div>
  </b-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Article",
  computed: {
    ...mapState('article', {
      article(state){
        return state.articleList[this.$route.params.id - 1]
      }
    })
  },
  components: {
    ArticleBody: () => import('@/atomic/atoms/ArticleBody'),
    ArticleTitle: () => import('@/atomic/atoms/ArticleTitle'),
    ArticleCategory: () => import('@/atomic/atoms/ArticleCategory')
  }
}
</script>

<style scoped>

</style>