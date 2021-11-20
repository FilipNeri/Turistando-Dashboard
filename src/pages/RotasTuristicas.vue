<template>
  <div class="container--routerView">
    <Header :titulo="titulo" :tipo="tipo" class="titulo--routerView" />
    <Content
      @emitDelete="getRotasTuristicas()"
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

import RotaTuristica from "../services/rotasTuristicas";
import Imagem from "../services/imagens";

export default {
  name: "RotasTuristicas",
  components: {
    Header,
    Content,
    Footer,
  },
  data() {
    return {
      titulo: "Rotas Turísticas",
      tipo: "rotaTuristica",
      objetos: [],
      abrirImagens:false
    };
  },
  methods: {
    async getRotasTuristicas() {
      await RotaTuristica.listandoRotasTuristicas().then((response) => {
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
    this.getRotasTuristicas();
  },
};
</script>
