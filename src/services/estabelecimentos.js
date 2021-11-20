import api from './api'

export default {
    inserindoEstabelecimento:(estabelecimento) =>{
        return api.post('/estabelecimentos',estabelecimento)
    },
    listandoEstabelecimento:()=>{
        return api.get('/estabelecimentos')
    },
    alterandoEstabelecimento:(estabelecimento)=>{
        return api.put('/estabelecimentos',estabelecimento)
    },
    removendoEstabelecimento:(id)=>{
        return api.delete('/estabelecimentos/'+id)
    },
    removendoImagem:(id)=>{
        return api.delete('/estabelecimentos',id)
    }
}