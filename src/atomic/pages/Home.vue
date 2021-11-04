<template>
  <b-container>
    <b-row align-h="center">
       <article-card v-for="article in articleList" :key="article.id" :article="article"/>
    </b-row>
  </b-container>
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