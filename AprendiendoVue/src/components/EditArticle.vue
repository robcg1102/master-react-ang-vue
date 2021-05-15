<template src="./CreateArticle.html"></template>

<script>

import Sidebar from "./Sidebar";

import Global from "../Global";
import axios from "axios";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from 'sweetalert';

export default {
  name: "EditArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
      isEdit: true,
    };
  },
  mounted() {
      var articleId = this.$route.params.id;
      this.getArticle(articleId)
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  methods: {
    save() {
      this.submitted = true;
      var articleId = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/" + articleId, this.article)
          .then((res) => {
            if (res.data.status === "success") {
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();

                formData.append("file0", this.file, this.file.name);
                var articleId = res.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then((res) => {
                    if (res.data.article) {
                      swal("Artículo editad", "El artículo se editó correctamente", "success");
                      this.article = res.data.article;
                      this.$router.push("/articulo/"+this.article._id);
                    } else {
                      console.log("hola");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                swal("Artículo editado", "El artículo se editó correctamente", "success");
                this.article = res.data.article;
                this.$router.push("/articulo/"+this.article._id);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.article;
        }
      });
    },
  },
};
</script>