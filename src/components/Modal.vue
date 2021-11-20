<template>
      <div id="modal--id" class="modal--container" @click="fecharModal()">
      <div class="modal">
        <form class="form">
          <h3 class="titulo--routerView">{{ titulo }}</h3>
          <button @click.prevent="fecharModal()" class="fechar--modal">x</button>
          <div style="display:flex">
            <label class="titulo">Nome: <input type="text"/></label>
            <label class="titulo">Latitude: <input type="text"/></label>
            <label class="titulo">Longitude: <input type="text"/></label>
          </div>
          <div style="display:flex; justify-content: space-around;">
            <label class="titulo"
              >Texto: <textarea type="text" class="text--area"></textarea
            ></label>
            <label class="titulo"
              >Descrição; <textarea type="text" class="text--area"></textarea
            ></label>
          </div>
          <div style="display:flex;justify-content: flex-end;">
          <button class="button" @click.prevent="cadastrar()">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    titulo: String,
  },
  methods:{
    cadastrar(evento){
      this.fecharModal(evento)
    },
    abrirModal(modalId){
      const modal = document.getElementById(modalId)
      modal.classList.add('mostrar--modal')
    },
    fecharModal(){
      const modal=document.getElementById('modal--id')
      modal.classList.remove('mostrar--modal')
    },

  },
/*   created() {
    this.abrirModal('modal--id')
  }, */
};
</script>

<style>
/* 
////////////////////////MODAL//////////////////////
 */
.modal{
  position: relative;
  height: 500px;
  width: 900px;
  z-index: 1001;
  background-color: #dcdcdc;
  border-radius: 10px;
  border: double 10px #6059c1  ;
  padding: 5px;
}
.modal--container{
  display: none;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  position: fixed  ;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.fechar--modal{
  position: absolute;
  top: -20px;
  right: -20px;
  
  width: 40px;
  height: 40px;

  color: #fff;
  background-color: #6059c1 ;
  border-radius: 50%;
  border: solid 2px #000;
}
.modal--container.mostrar--modal{
  display:flex
}
@keyframes modal{
  from{
    opacity: 0;
    transform: translate3d(0,-60px,0);
  }
  to{
    opacity: 1;
    transform: translate3d(0,0,0);

  }
}
.mostrar--modal .modal{
  animation: modal .3s;
}
</style>