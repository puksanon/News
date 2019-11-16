<template>
  <div class="home">
    <SlideBar></SlideBar>
    <Contentbg></Contentbg>
  </div>
</template>

<script>
// // eslint-disable-next-line
// import authHeader from '../_helpers/auth-header'
import SlideBar from './SlideBar'
import Contentbg from './Content_bg'

export default {
  name: 'home',
  components: {
    SlideBar,Contentbg
  }
};
</script>

<style scoped>

</style>
