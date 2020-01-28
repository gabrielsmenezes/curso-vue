<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<p>{{cpf | cpf}}</p>
		<input type="text" v-model="cpf">
	</div>
</template>

<script>
export default {
	filters: {
		cpf(valor){
			const array = valor.split('');
			array.splice(3,0,'.')
			array.splice(7,0,'.')
			array.splice(11,0,'-')
			return array.join('')
		}
	},
	data(){
		return {
			cpf: '05731620180'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
