<template>
  <div class="container--routerView ">
    <Header :titulo="titulo" :tipo="tipo" class="titulo--routerView" />
    <Content
      @emitDelete="getEventos()"
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

import Evento from "../services/eventos";
import Imagem from "../services/imagens";

export default {
  name: "Eventos",
  components: {
    Header,
    Content,
    Footer,
  },
  data() {
    return {
      titulo: "Eventos",
      objetos: [],
      tipo: "evento",
      abrirImagens:false
    };
  },
  methods: {
    async getEventos() {
      await Evento.listandoEventos().then((response) => {
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
    this.getEventos();
  },
};
</script>
