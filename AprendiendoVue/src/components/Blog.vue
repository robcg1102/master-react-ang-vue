<template>
  <div class="general">
    <Slider texto="Blog" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <div id="articles" v-if="articles">
          <Articles :articles="articles" />
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
import Articles from "./Articles.vue"

import axios from "axios";
import Global from "../Global";

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles").then((res) => {
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
      titlePage: "Blog"
    };
    
  },
  meta: {title: 'Blog'}
};
</script>