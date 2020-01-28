<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!submetido">
				<div class="cabecalho">Formulário</div>
				<NomeCompleto><input type="text" v-model="usuario.nome"></NomeCompleto>
				<Rotulo nome="E-mail">
					<input type="email" v-model="usuario.email">
				</Rotulo>

				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				
				<Rotulo nome="Armazenar?">
					<input type="radio" v-model="armazenar" value=1>Sim
					<input type="radio" v-model="armazenar" value=0 >Não
				</Rotulo>

				<button v-on:click.prevent="submeter">Submeter</button>
				
			</form>
			<div class="painel" v-if="submetido">
				<div class="cabecalho">

					<p>{{usuario.nome}}</p>
					<p>{{usuario.email}}</p>
					<p>{{usuario.senha}}</p>
					<p>{{armazenar}}</p>

				</div>

			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto'
export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	methods: {
		submeter(){
			this.submetido = true
		}
	},
	data(){
		return{
			submetido: false,
			usuario: {
				nome: '',
				email: '',
				senha: '',
				armazenar: false
			}
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
