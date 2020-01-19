<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
export default {
  name: "App"
};
</script>

<style>
#app{
  font-family: 'Advent Pro', sans-serif;
}

.v-carousel{
  border-radius: 0%;
}

</style>