import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL= 'https://curso-vue-3dfc9.firebaseio.com/';

// Vue.use({
//     install(Vue){
//         Vue.prototype.$http = axios;
//     }
// })

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-3dfc9.firebaseio.com/'
        });

        Vue.prototype.$http.interceptors.request.use(config => {
            return config
        });

        // Vue.prototype.$http.interceptors.response.use(resposta => {
        //     const array = [];
        //     for (let chave in resposta.data) {
        //         array.push({id: chave, ...resposta.data[chave]});
        //     }
        //     resposta.data = array;
        //     return resposta;
        // })
    }
})