<template>
  <div class="general">
    <Slider :texto="'Búsqueda: ' + searchString" />
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles">Artículos encontrados</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>
        <div id="articles" v-if="articles">
          <Articles :articles="articles" />
        </div>
        <div v-else>
          <h2>No hay artículos que coincidan con tu búsqueda</h2>
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";
import Articles from "./Articles.vue";

import axios from "axios";
import Global from "../Global";

export default {
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url + "search/" + searchString).then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
  data() {
    return {
      articles: null,
      url: Global.url,
      titlePage: "Blog",
      searchString: null,
    };
  },
};
</script>