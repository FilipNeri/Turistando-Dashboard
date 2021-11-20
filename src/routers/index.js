import Eventos from '../pages/Eventos.vue'
import Estabelecimentos from '../pages/Estabelecimentos.vue'
import PontosTuristicos from '../pages/PontosTuristicos.vue'
import RotasTuristicas from '../pages/RotasTuristicas.vue'
import Create from '../components/Operacoes/Create.vue'
import Update from '../components/Operacoes/Update.vue'
import VueRouter from 'vue-router'
const routes =[
    { path: '/', component: Eventos},
    { path: '/create', component: Create, name:"Create", props: true},
    { path: '/update', component: Update, name:"Update", props: true},
    { path: '/estabelecimentos', component: Estabelecimentos },
    { path: '/pontosturisticos', component: PontosTuristicos },
    { path: '/rotasturisticas', component: RotasTuristicas }
]

const router = new VueRouter({
    routes 
  })
export default router