<template>
  <div>
    <v-navigation-drawer app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Menu</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense class="pt-0">
        <v-list-tile v-for="item in itensMenu" :key="item.titulo">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Desafio</span>
        <span class="font-weight-light">Componente</span>
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    props: {
        "itensMenu": Array
    }
};
</script>

<style>
</style>