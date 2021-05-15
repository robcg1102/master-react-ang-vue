<template>
  <div class="general">
    <Slider texto="Página de pruebas"/>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Página de pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        <h4>{{ nombre }}</h4>
        <button @click="actualizarNombre()">Actualizar</button>
        <button @click="redirigirAlBlog()">Vamos al Blog</button>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";

export default {
  name: "Pagina",
  // mounted() {
  //   this.id_desde_url = this.$route.params.id;
  //   console.log("Componente montado");
  // },
  // created() {
  //   console.log("Componente creado");
  // },
  // updated() {
  //   console.log("Componente actualizado");
  // },
  // destroyed() {
  //   console.log("Componente eliminado");
  // },
  data() {
    return {
      id_desde_url: null,
      nombre: "Daniela",
      
    };
  },
  methods: {
    actualizarNombre() {
      if (this.nombre === "Daniela") {
        this.nombre = "Gabriela";
      } else {
        this.nombre = "Daniela";
      }
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
    },
  },
  components: {
        Slider,
        Sidebar,
      },
};
</script>