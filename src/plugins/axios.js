import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){

        Vue.prototype.$http = axios.create({
            baseURL: 'https://api.giphy.com/v1/gifs/',
        }),
        Vue.prototype.$JSON_SERVER = axios.create({
            baseURL: 'http://localhost:5001/posts',
        })
    }
})

/*const BASE_API = 'api.giphy.com/v1/gifs'
const TOKEN ='fKBiqixYUcXzaAMUl8G2iV6jY4bk0HBv'
const teste = 'api.giphy.com/v1/gifs/trending?api_key=fKBiqixYUcXzaAMUl8G2iV6jY4bk0HBv'*/