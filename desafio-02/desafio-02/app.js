new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert("Alerta");
        },
        salvarValor(event){
            this.valor = event.target.value;
        }
    }
})