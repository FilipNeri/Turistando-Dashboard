import api from './api'

export default {
    inserindoEventos:(evento) =>{
        return api.post('/eventos',evento)
    },
    listandoEventos:()=>{
        return api.get('/eventos')
    },
    alterandoEventos:(evento)=>{
        return api.put('/eventos',evento)
    },
    removendoEventos:(id)=>{
        return api.delete('/eventos/'+id)
    },
    removendoImagem:(id)=>{
        return api.delete('/eventos',id)
    }
}