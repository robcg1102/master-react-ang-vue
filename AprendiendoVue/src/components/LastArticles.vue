<template>
  <div class="general">
    <Slider texto="Home" home="true"/>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
            <Articles :articles="articles"/>
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
import Global from "../Global"
import axios from 'axios';

export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getLastArticles();
  },
  methods: {
    getLastArticles() {
      axios.get(this.url + "articles/true").then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
  data() {
    return {
      articles: null,
      url: Global.url,
    };
  },
};
</script>