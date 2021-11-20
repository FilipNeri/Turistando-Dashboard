<template>
  <div class="container--routerView">
    <Header :titulo="titulo" :tipo="tipo" class="titulo--routerView" />
    <Content
      @emitDelete="getPontoTuristicos()"
      :objetos="objetos"
      :tipo="tipo"
      v-if="abrirImagens"
    />
    <Footer />
  </div>
</template>

<script>
import Content from "../components/Content.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

import PontoTuristico from "../services/pontosTuristicos";
import Imagem from "../services/imagens";

export default {
  name: "PontosTuristicos",
  components: {
    Header,
    Content,
    Footer,
  },
  data() {
    return {
      titulo: "Pontos Turísticos",
      tipo: "pontoTuristico",
      objetos: [],
      abrirImagens:false
    };
  },
  methods: {
     async getPontosTuristicos() {
      await PontoTuristico.listandoPontosTuristicos().then((response) => {
        this.objetos = response.data;
        this.objetos.map((objeto) => {
          objeto.imagens = [];
          Imagem.listandoImagensID(objeto).then((response) => {
            objeto.imagens.push(response.data);
          });
        });
      });
      this.abrirImagens = true
    },
  },
  created() {
    this.getPontosTuristicos();
  },
};
</script>
