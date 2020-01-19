<template>
    <v-card
    color="grey lighten-4"
    flat
    height="100px"
    tile
  >
    <v-toolbar extended>
      <v-avatar color="red" style="margin-right: 20px;">
        <span class="white--text headline">CJ</span>
      </v-avatar>
      <v-toolbar-title><h1>news</h1></v-toolbar-title>

      <v-spacer></v-spacer>

      <Signin></Signin>
    </v-toolbar>
  </v-card>
</template>

<script>
const Signin = () => import("../Singin/SignIn")
export default {
    name : 'Navbar',
    components:{ Signin },
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
      }
    },
}
</script>