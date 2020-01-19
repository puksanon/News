  
<template>
    <v-carousel
        cycle
        height="300"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        >

            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
            <v-card color="transparent" id="carousel-setail">
                <v-card-title class="headline">Unlimited music now</v-card-title>
                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            </v-card>

            
            </v-row>
 
        </v-carousel-item>
      </v-carousel>
</template>

<script>
  export default {
    name : 'CarouselsHighlight',
    data() {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    }   
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