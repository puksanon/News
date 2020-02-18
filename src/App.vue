<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<script>

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