import Vue from 'vue'
import Tabela from '.Tabela.vue'
new Vue({
    el: "#app",
    components: [Tabela],
    data: {
        nome: "Gabriel",
        pessoas: [
            {
                id: 1,
                nome: "Ana",
                idade: 20
            },
            {
                id: 2,
                nome: "Carlos",
                idade: 20
            },
            {
                id: 3,
                nome: "Daniel",
                idade: 20
            },
            {
                id: 4,
                nome: "Ema",
                idade: 20
            },
            {
                id: 5,
                nome: "Lia",
                idade: 20
            }
        ]
    }
})