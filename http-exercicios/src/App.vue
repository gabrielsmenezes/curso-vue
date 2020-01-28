<template>
  <div id="app" class="container">
    <b-alert
      show
      dismissible
      v-for="mensagem in mensagens"
      v-bind:key="mensagem.texto"
      v-bind:variant="mensagem.tipo"
    >{{mensagem.texto}}</b-alert>
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome" />
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o email" />
      </b-form-group>
      <hr />
      <b-button v-on:click="salvar" size="lg" variant="primary" class="m-2">Salvar</b-button>
      <b-button v-on:click="obterUsuarios" size="lg" variant="success" class="m-2">Obter Usuários</b-button>
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, idfor) in usuarios" v-bind:key="idfor">
        <p>{{idfor}}</p>
        <p>{{usuario.nome}}</p>
        <p>{{usuario.email}}</p>
        <b-button v-on:click="carregar(idfor)" size="lg" variant="warning" class="m-2">Carregar</b-button>
        <b-button v-on:click="excluir(idfor)" size="lg" variant="danger" class="m-2">Apagar</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagens: [],
      usuarios: [],
      id: "",
      usuario: {
        nome: "",
        email: ""
      }
    };
  },

  methods: {
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
      this.mensagens = [];
    },

    salvar() {
      this.$http.post("usuarios.json", this.usuario).then(() => {
        this.limpar();
        this.mensagens.push({
          texto: "Cadastrado com sucesso",
          tipo: "success"
        });
      });
    },

    carregar(id) {
      console.log(id);
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },

    excluir(id) {
      this.$http.delete(`/usuarios/${id}.json`).then(() => this.limpar());
    },

    obterUsuarios() {
      this.$http.get("usuarios.json").then(resposta => {
        this.usuarios = resposta.data;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
