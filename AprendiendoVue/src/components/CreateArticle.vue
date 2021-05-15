<template src="./CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar";

import Global from "../Global";
import axios from "axios";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from 'sweetalert';

export default {
  name: "CreateArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
    };
  },
  mounted() {},
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
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
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
                      swal("Artículo creado", "Se ha creado con éxito tu artículo", "success");
                      this.article = res.data.article;
                      this.$router.push("/blog");
                    } else {
                      console.log("hola");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                swal("Artículo creado", "Se ha creado con éxito tu artículo", "success");
                this.article = res.data.article;
                this.$router.push("/blog");
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
  },
};
</script>