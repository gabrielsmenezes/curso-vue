<template>
  <div id="app">
    <h1>Diretivas</h1>
    <p v-destaque.atrasar="'lightblue'">Usando diretiva</p>
    <p v-destaque:fundo.atrasar="'red'">Usando diretiva</p>
  </div>
</template>

<script>
export default {
  directives: {
    destaque: {
      bind(el, binding, vnode) {
        // el.style.backgroundColor = 'lightgreen'

        console.log("el", el);
        console.log("binding", binding);

        let atraso = 0;

        if (binding.modifiers["atrasar"]) {
          atraso = 3000;
        }

        setTimeout(() => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, atraso);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
