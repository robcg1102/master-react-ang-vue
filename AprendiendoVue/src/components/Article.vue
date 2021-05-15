<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="url + 'get-image/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img
              src="../assets/images/default.png"
              :alt="article.title"
              v-else
            />
          </div>

          <h1 class="subheader">{{ article.title }}</h1>
          <span class="date"> {{ article.date | moment("from", "now") }}</span>
          <p>{{ article.content }}</p>
          <div class="clearfix"></div>
          <router-link :to="'/editar/' + article._id" class="btn btn-warning"
            >Editar</router-link
          >
          <a @click="deletedArticle(article._id)" class="btn btn-danger"
            >Eliminar</a
          >
        </article>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import swal from "sweetalert";
import axios from "axios";
import Global from "../Global";

export default {
  name: "Article",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: null,
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.article;
        }
      });
    },
    deletedArticle(articleId) {
      swal({
        title: "Estás seguro de borrarlo?",
        text: "Una vez borrado no se podrá recuperar!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(this.url + "article/" + articleId).then(() => {
            swal(
              "Artículo borrado",
              "El artículo se ha borrado con éxito",
              "success"
            );
            this.$router.push("/blog");
          });
        } else {
          swal("Tu archivo está a salvo");
        }
      });
    },
  },
};
</script>