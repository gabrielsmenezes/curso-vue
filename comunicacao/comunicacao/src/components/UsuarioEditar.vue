<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade: {{idade}}</p>
        <button v-on:click='alterarIdade'>Alterar idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props= ['idade'],
    methods: {
        alterarIdade(){
            this.idade = 33
            barramento.$emit('idadeMudou', this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
