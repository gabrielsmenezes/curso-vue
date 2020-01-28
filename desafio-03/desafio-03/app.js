new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: "Valor Diferente"
    },
    watch: {
        valor(novo, antigo){
            if (novo  == 37){
                this.resultado = "Valor Igual"
            }else{
                this.resultado = "Valor Diferente"
            }
            console.log(novo);
        }
    }
});