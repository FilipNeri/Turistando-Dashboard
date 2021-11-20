<template>
  <div class="container">
    <label class="titulo--routerView">Editar</label>
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
        <label class="titulo" v-if="tipo=='rotaTuristica'"
          >Classe: <input type="text" v-model="item.classe"
        /></label>
      </div>
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
      <div>
      <input type="file" name="Carregar imagem" @change.prevent="onFileSelected" />
      <button style=" width: 100px; margin:5px;" @click.prevent="onUpload(item)">Enviar</button>
      </div>

      <div class="image--container">
        <img
          class="image--button"
          src="../../assets/esquerda.png"
          alt=""
          @click="avancarEsquerda()"
        />
        <div class="image--list">
          <div v-for="(img, index) in imagens" :key="img.id">
            <div
              style="display:flex; align-items:center; justify-content:flex-end; position: relative; bottom: -20px; right: -5px;"
            >
              <img
                @click="removerImagem(img)"
                class="button--icones"
                src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
                v-if="index >= indexInicial && index <= indexFinal"
              />
            </div>
            <img
              class="image"
              :src="img.path"
              v-if="index >= indexInicial && index <= indexFinal"
            />
          </div>
        </div>
        <img
          class="image--button"
          src="../../assets/direita.png"
          alt=""
          @click="avancarDireita()"
        />
      </div>
      <div style="display:flex;justify-content: flex-end;">
        <button class="button" @click.prevent="editar(item, tipo)">
          Editar
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

import Imagem from "../../services/imagens";

export default {
  name: "Update",
  props: {
    tipo: String,
    objeto: Object,
  },
  data() {
    return {
      selectedFile:null,
      item: {
        id:"",
        nome: "",
        latitude: "",
        longitude: "",
        classe:"",
        texto: "",
        descricao: "",
      },
      imagens: [],
      indexInicial: 0,
      indexFinal: 3,
    };
  },
  methods: {
    onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    async onUpload(item){
      const fd = new FormData();
      fd.append('image',this.selectedFile,this.selectedFile.name)
      fd.append("id_item",`${item.id}`)
      await Imagem.inserindoImagem(fd).then(response=>{
        console.log(response)
      })
      this.getImagens(this.item)
    },
    async editar(item, tipo) {
      console.log(tipo);
      if (tipo == "evento") {
        await Evento.alterandoEventos(item).then((response) => {
          console.log(response);
          this.$router.push("/");
        });
      } else if (tipo == "pontoTuristico") {
        await PontoTuristico.alterandoPontosTuristicos(item).then(
          (response) => {
            console.log(response);
            this.$router.push("/pontosTuristicos");
          }
        );
      } else if (tipo == "estabelecimento") {
        await Estabelecimento.alterandoEstabelecimento(item).then(
          (response) => {
            console.log(response);
            this.$router.push("/estabelecimentos");
          }
        );
      }else if(tipo =="rotaTuristica"){
        await RotaTuristica.alterandoRotasTuristicas(item).then(
          (response) => {
            console.log(response);
            this.$router.push("/rotaturistica");
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
    },
    async removerImagem(imagem){
      console.log(imagem)
      await Imagem.removerImagem(imagem).then(response=>{
        console.log(response)
      })
      this.getImagens(this.item)
    },
    async getImagens(item) {
      await Imagem.listandoImagensID(item).then((response) => {
        this.imagens = response.data;
      });
    },
    setVariaveis() {
      this.item = this.objeto;
      this.getImagens(this.item);
    },
  },
  mounted() {
    this.setVariaveis();
    
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

.image--container {
  display: flex;
  align-items: center;

  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: #6059c1;

  width: 930px;
  height: 240px;
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
</style>
