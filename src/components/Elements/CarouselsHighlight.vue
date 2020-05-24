  
<template>
    <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item,i) in Newsdata.slice((Newsdata.length - 5) , Newsdata.length)"
          :key="i"
          :src="item.imageUrl"
        >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-card color="transparent" id="carousel-setail">
                  <v-card-title class="headline">{{item.title }}</v-card-title>
                  <v-card-subtitle>{{ item.content }}</v-card-subtitle>
              </v-card>
            </v-row>
        </v-carousel-item>
      </v-carousel>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name : 'CarouselsHighlight',
    computed: {
        ...mapState(['Newsdata'])
    },
  }
</script>

<style  scoped>
  #carousel-setail{
    box-shadow: none;
    display: block;
    position: absolute;
    top: 10%;
    left: 5%;
    border-radius: 0%;
  }
</style>