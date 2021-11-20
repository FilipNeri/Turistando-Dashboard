<template>
  <div class="container--routerView">
    <Header :titulo="titulo" :tipo="tipo" class="titulo--routerView" />
    <Content
      @emitDelete="getEstabelecimentos()"
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

import Estabelecimento from "../services/estabelecimentos";
import Imagem from "../services/imagens";

export default {
  name: "Estabelecimentos",
  components: {
    Header,
    Content,
    Footer,
  },
  data() {
    return {
      titulo: "Estabelecimentos",
      tipo: "estabelecimento",
      objetos: [],
      abrirImagens:false
    };
  },
  methods: {
async getEstabelecimentos() {
      await Estabelecimento.listandoEstabelecimento().then((response) => {
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
    this.getEstabelecimentos();
  },
};
</script>
