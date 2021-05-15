<template>
  <section id="content">
    <h2 class="subheader">Mi componente</h2>
    <hr />
    <h1>Este es Mi Componente desde: {{ msg }}</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />
    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    <p>Mi nombre es: {{ nombre }}</p>
    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    <p>
      Mi edad es: <strong>{{ edad }}</strong>
    </p>
    <p v-if="edad && edad >= 18 && edad < 65">
      <strong style="color: red; font-weight: bold">Eres mayor de edad!</strong>
    </p>
    <p v-else-if="edad && edad >= 65">
      <strong style="color: red; font-weight: bold">Avanzada edad!</strong>
    </p>
    <p v-else>
      <strong style="color: red; font-weight: bold">Menor edad</strong>
    </p>

    <h2>Directiva iterativa</h2>
    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  props: {
    msg: String,
  },
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 18,
      peliculas: ['Batman vs Superman', 'El señor de los anillos', 'Spiderman', 'Anabel']
    };
  },
};
</script>