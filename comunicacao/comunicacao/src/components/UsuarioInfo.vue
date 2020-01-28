<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario: {{inverterNome()}}</p>
        <button v-on:click='reiniciarNome()'>Reiniciar Nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    
    props: {
        nome: {
            type: String,
            required: true,
            // default: "Valor default"
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    },

    created() {
        barramento.$on('idadeMudou', (idade) => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
