import api from './api'

export default {
    inserindoRotasTuristicas:(rotaTuristica) =>{
        return api.post('/rotasTuristicas',rotaTuristica)
    },
    listandoRotasTuristicas:()=>{
        return api.get('/rotasTuristicas')
    },
    alterandoRotasTuristicas:(rotaTuristica)=>{
        return api.put('/rotasTuristicas',rotaTuristica)
    },
    removendoRotasTuristicas:(id)=>{
        return api.delete('/rotasTuristicas',id)
    },
    removendoImagem:(id)=>{
        return api.delete('/rotasTuristicas',id)
    }
}