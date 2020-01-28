<template>
  <v-app>
    
	<toolbar v-bind:itensMenu="itensMenu"/>

  
	<carrossel v-bind:fotos="fotos"/>
    <rodape></rodape>
  </v-app>
</template>

<script>
import Rodape from "./components/Rodape";
import Carrossel from "./components/Carrossel";
import Toolbar from "./components/Toolbar";

export default {
  components: {
	Rodape,
	Carrossel,
	Toolbar
  },
  data() {
    return {
      itensMenu: [
        { titulo: "Início", icon: "dashboard" },
        { titulo: "Sobre", icon: "question_answer" }
      ],
      fotos: [
        { src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" }
      ]
    };
  }
};
</script>
