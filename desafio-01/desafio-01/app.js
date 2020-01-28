new Vue({
    el: "#desafio",
    data:{
        SEU_NOME: "Gabriel",
        IDADE: 24,
        IMAGEM: "https://s2.glbimg.com/59orRRwMWJsrwmjelRs6qrJqWik=/0x0:5605x3712/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/0/L/2MEoShTvKi1Tjk9Op0IQ/treinosj07dez2019.2-grupo.jpg"
    },
    methods:{
        multiplicaIdade: function(){
            return this.IDADE*3;
        }
    }
})