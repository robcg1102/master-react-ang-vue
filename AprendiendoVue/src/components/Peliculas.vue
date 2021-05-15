<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>
        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos">
            {{ misDatos }}
          </p>
          {{ this.nombre | mayusculas | concatenaYear("este año feo") }}
        </div>
        <div v-if="favorita" class="favorita">
          Mi película favorita es: {{ favorita.title }}
        </div>
        <!--Listado articulos-->
        <div id="articles">
          <!--  -->
          <div v-for="pelicula in peliculasMayuscula" :key="pelicula.title">
            <Pelicula
              @favorita="haLlegadoLaPeliculaFavorita"
              :pelicula="pelicula"
            />
          </div>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Peliculas",
  components: {
    Sidebar,
    Pelicula,
  },
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
    concatenaYear(value, message) {
      var date = new Date();
      return value + " " + date.getFullYear() + " " + message;
    },
  },
  computed: {
    peliculasMayuscula() {
      var peliculasMod = this.peliculas;
      for (var i = 0; i < peliculasMod.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    },
    misDatos() {
      return (
        this.nombre + " " + this.apellidos + "<br/>" + "Sitio web: " + this.web
      );
    },
  },
  data() {
    return {
      nombre: "Roberto",
      apellidos: "Carro Gast",
      web: "robcg.com",
      favorita: null,
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://mypostercollection.com/wp-content/uploads/2018/06/Batman-Vs-Superman-hd-printable-Poster-MyPosterCollection.com-Superman-and-Batman-1.jpg?x49793",
        },
        {
          title: "Spiderman",
          year: 2009,
          image:
            "https://vignette.wikia.nocookie.net/marvelcomicsfanon/images/e/e3/Spiderman_film_poster.jpg/revision/latest?cb=20150214080714",
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/gallery_big/public/media/image/2016/12/senor-anillos-comunidad-anillo_2.jpg?itok=y0uLGxsR",
        },
      ],
    };
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita) {
      this.favorita = favorita;
    },
  },
};
</script>