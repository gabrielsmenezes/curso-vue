<template>
  <v-content>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in fotos" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </v-content>
</template>

<script>
export default {
    props: {
        fotos: Array
    }
};
</script>

<style>
</style>