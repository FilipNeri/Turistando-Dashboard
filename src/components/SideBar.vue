<template>
  <div class="container" >
    <label class="titulo">
    Turistando
      </label>
      <div class="container--navegation">
        <router-link to="/" class="tituloNavegacao">Eventos</router-link>
        <router-link to="/rotasturisticas" class="tituloNavegacao">Rotas Turísticas</router-link>
        <router-link to="/pontosturisticos" class="tituloNavegacao">Pontos Turísticos</router-link>
        <router-link to="/estabelecimentos" class="tituloNavegacao">Estabelecimentos</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
*{
    background-color:#6059c1;
}
.titulo{
  display: flex;
  justify-content: center;
  font-family: 'Pacifico', cursive; 
  font-size:30px;
  color: black;
  margin-bottom: 50px ;

}
.tituloNavegacao{
font-size: 25px;
padding: 5px;
color: #dcdcdc;
 text-decoration: none;
margin-bottom:5px ;

}
.tituloNavegacao:hover{
  color: #191970;
  transition: all 0.5s ease;
  filter: brightness(85%);
}
.container--navegation{
display: flex;
flex-direction: column;
padding: 6px;

}
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 250px;
  position:fixed;
}
</style>