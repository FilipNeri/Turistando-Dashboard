<template>
  <div class="container">
    <label class="titulo--routerView">Cadastrar</label>
    <form class="form">
      <div style="display:flex">
        <label class="titulo"
          >Nome: <input type="text" v-model="item.nome"
        /></label>
        <label class="titulo"
          >Latitude: <input type="text" v-model="item.latitude"
        /></label>
        <label class="titulo"
          >Longitude: <input type="text" v-model="item.longitude"
        /></label>
      </div>
      <label class="titulo" v-if="tipo=='rotaTuristica'"
          >Classe: <input type="text" v-model="item.classe"
        /></label>
      <div style="display:flex; justify-content: space-around;">
        <label class="titulo"
          >Texto:
          <textarea
            type="text"
            class="text--area"
            v-model="item.texto"
          ></textarea
        ></label>
        <label class="titulo"
          >Descrição:
          <textarea
            type="text"
            class="text--area"
            v-model="item.descricao"
          ></textarea
        ></label>
      </div>
      <div style="display:flex;justify-content: flex-end;">
        <button class="button" @click.prevent="cadastrar(item, tipo)">
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Evento from "../../services/eventos";
import Estabelecimento from "../../services/estabelecimentos";
import PontoTuristico from "../../services/pontosTuristicos";
import RotaTuristica from "../../services/rotasTuristicas";

export default {
  name: "Create",
  props: {
    tipo: String,
  },
  data() {
    return {
      selectedFile:null,
      item: {
        nome: "",
        latitude: "",
        longitude: "",
        classe:"",
        texto: "",
        descricao: "",
      },
    };
  },
  methods: {
    async cadastrar(item, tipo) {
      console.log(tipo);
      if (tipo == "evento") {
        await Evento.inserindoEventos(item).then((response) => {
          console.log(response);
          this.$router.push("/");
        });
      } else if (tipo == "pontoTuristico") {
        await PontoTuristico.inserindoPontosTuristicos(item).then(
          (response) => {
            console.log(response);
            this.$router.push("/pontosTuristicos");
          }
        );
      } else if (tipo == "estabelecimento") {
        await Estabelecimento.inserindoEstabelecimento(item).then(
          (response) => {
            console.log(response);
            this.$router.push("/estabelecimentos");
          }
        );
      }else if(tipo == "rotaTuristica"){
        await RotaTuristica.inserindoRotasTuristicas(item).then(
          (response) => {
            console.log(response);
            this.$router.push("/rotasTuristicas");
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
.form {
  display: flex;
  flex-direction: column;
}
.text--area {
  width: 400px;
  height: 200px;
  line-height: 1.5;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
.titulo {
  font-size: 18px;
  color: #6059c1;
  padding: 10px;
}
</style>
