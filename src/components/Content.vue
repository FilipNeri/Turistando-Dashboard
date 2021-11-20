<template>
  <div class="container">
    <ul v-for="obj in objetos" :key="obj.id">
      <li class="objetos">
        <div style="display:flex;align-items:center;padding-right:5px">
          <label class="objetos--nome" v-if="tipo=='rotaTuristica'">{{ obj.classe }} - </label>
          <label class="objetos--nome">{{ obj.nome }}</label>
          <div
            style="height:30px;width:30px; display:flex;place-content:center"
          >
            <img
              @click="update(obj, tipo)"
              class="button--icones"
              src="https://img.icons8.com/color/50/000000/edit-property.png"
            />
          </div>
          <div
            style="height:30px;width:30px; display:flex;place-content:center"
          >
            <img
              @click="deletar(obj, tipo)"
              class="button--icones"
              src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
            />
          </div>
        </div>
        <label style="opacity:0.6">{{ obj.descricao }}</label>
        <br />
        <label>{{ obj.texto }}</label>
        <br />
        <div style="display:flex;align-items:center;">
          Localização:
          <div class="localizacao">
            <label>Latitude: {{ obj.latitude }}</label>
            <label>Longitude: {{ obj.longitude }}</label>
          </div>
        </div>
        <Imagem :imagens="obj.imagens" v-if="abrirImagem"/>
      </li>
    </ul>
  </div>
</template>

<script>

import Imagem from "./Imagem/Imagem.vue"

import Evento from "../services/eventos";
import Estabelecimento from "../services/estabelecimentos";
import PontoTuristico from "../services/pontosTuristicos";
import RotaTuristica from "../services/rotasTuristicas";

export default {
  name: "Content",
  props: {
    objetos: Array,
    tipo: String,
  },
  components:{
    Imagem
  },
  data() {
    return {
      imagens: [],
      indexInicial: 0,
      indexFinal: 3,
      abrirImagem:false
    };
  },
  methods: {
    update(objeto, tipo) {
      this.$router.push({
        path: "/update",
        name: "Update",
        params: { tipo: tipo, objeto: objeto },
      });
    },
    async deletar(item, tipo) {
      if (tipo == "evento") {
        await Evento.removendoEventos(item.id).then((response) => {
          console.log(response);
        });
        this.$emit("emitDelete");
      } else if (tipo == "pontoTuristico") {
        await PontoTuristico.removendoPontosTuristicos(item.id).then(
          (response) => {
            console.log(response);
          }
        );
        this.$emit("emitDelete");
      } else if (tipo == "estabelecimento") {
        await Estabelecimento.removendoEstabelecimento(item.id).then(
          (response) => {
            console.log(response);
          }
        );
        this.$emit("emitDelete");
      } else if(tipo == "rotaTuristica"){
        await RotaTuristica.removendoRotasTuristicas(item.id).then(
          (response) => {
            console.log(response);
          }
        );
      }
    },
    avancarEsquerda() {
      this.indexInicial = this.indexInicial - 4;
      this.indexFinal = this.indexFinal - 4;
    },
    avancarDireita() {
      this.indexInicial = this.indexInicial + 4;
      this.indexFinal = this.indexFinal + 4;
    }
  },
  mounted() {
    setTimeout(() => {this.abrirImagem=true}, 2000);
  },
};
</script>
<style scoped>
.container {
  height: 85vh;
}
.localizacao {
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  color: #6059c1;
  background: #dcdcdc;
}
.image--container {
  display: flex;
  align-items: center;

  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;

  width: 900px;
  height: 200px;
}
.image--list {
  display: flex;
  overflow: hidden;
}
.image--button {
  width: 40px;
  height: 40px;
}
.image {
  margin: 5px;
  width: 200px;
  height: 200px;
}
.list--view {
  position: absolute;
}
</style>
