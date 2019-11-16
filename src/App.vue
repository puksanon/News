<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../static/js/bar'
export default {
  name: "App"
};
</script>

<style>
body{
  background-color: #f1f1f1;
  font-family: 'Advent Pro', sans-serif;
}
</style>