<template>
  <div id="app">
    <v-app>
      <Navbar></Navbar>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
const Navbar = () => import('./components/Elements/Navbar') 
import { mapState } from 'vuex'
export default {
  name: "App",
  components: { Navbar },
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