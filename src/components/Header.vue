<template>
  <div class="container">
    <label class="titulo--routerView">{{ titulo }}</label>
    <div style="height:30px;width:30px; display:flex;place-content:center">
      <img
      @click="cadastrar(tipo)"
        class="button--icones"
        src="https://img.icons8.com/color/48/000000/plus--v3.png"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    titulo: String,
    tipo:String
  },
  methods:{
    cadastrar(tipo){
      console.log(tipo)
      this.$router.push({path:"/create",name:'Create',params: {tipo: tipo }});
    }
  },
};
</script>
<style scoped>
.container {
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
