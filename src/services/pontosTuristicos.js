import api from './api'

export default {
    inserindoPontosTuristicos:(pontoTuristico) =>{
        return api.post('/pontosTuristicos',pontoTuristico)
    },
    listandoPontosTuristicos:()=>{
        return api.get('/pontosTuristicos')
    },
    alterandoPontosTuristicos:(pontoTuristico)=>{
        return api.put('/pontosTuristicos',pontoTuristico)
    },
    removendoPontosTuristicos:(id)=>{
        return api.delete('/pontosTuristicos/'+id)
    },
    removendoImagem:(id)=>{
        return api.delete('/pontosTuristicos',id)
    }
}