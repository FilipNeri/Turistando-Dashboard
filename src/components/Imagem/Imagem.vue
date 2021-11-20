<template>
  <div class="image--container" v-if="img">
    <img
      class="image--button"
      src="../../assets/esquerda.png"
      alt=""
      @click="avancarEsquerda()"
    />
    <div class="image--list">
      <div v-for="(img, index) in imagens[0]" :key="img.id">
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
</template>

<script>
export default {
  props: {
    imagens: Array,
  },
  data() {
    return {
      indexFinal: 3,
      indexInicial: 0,
    };
  },
  computed:{
    img(){
      if(this.imagens){
        return true
      }else{
        return false
      }
    }
  },
  methods: {
    avancarEsquerda() {
      this.indexInicial = this.indexInicial - 4;
      this.indexFinal = this.indexFinal - 4;
    },
    avancarDireita() {
      this.indexInicial = this.indexInicial + 4;
      this.indexFinal = this.indexFinal + 4;
    },
  },
  mounted() {
    console.log(this.imagens);
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
