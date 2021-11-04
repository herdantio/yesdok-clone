<template>
  <div>
    <div class="d-flex flex-column align-items-center">
      <article-card v-for="article in articleList" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Home",
  components: {
    ArticleCard: () => import('@/atomic/molecules/ArticleCard')
  },
  computed: {
    ...mapState('article', {
      articleList: state => state.articleList
    })
  }
}
</script>

<style scoped>

</style>