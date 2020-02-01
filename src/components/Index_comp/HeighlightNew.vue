<template>
    <div class="HeighlightNew">
        <v-card flat>
            <v-container fluid>
              <v-row class="child-flex">
                <div>
                  <v-toolbar color="elevation-0" style="padding: 5px;">
                    <v-toolbar-title><H3>Filter</H3></v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                </div>
              </v-row>
            </v-container>
          </v-card>
        <v-container>
            <v-row dense>
                <v-col
                v-for="card in cards"
                :key="card.title"
                :cols="card.flex"
                >
                <v-card height="300">
                    <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="100%"
                    >
                    <v-card-title>title</v-card-title>
                    <v-card-subtitle>subtitle</v-card-subtitle>
                    <v-card-actions>
                        <v-card-text><v-chip outlined color="white">sport</v-chip></v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn color="white" text v-on:click="senddata(item)">READ MORE</v-btn>
                    </v-card-actions>
                    </v-img>

                </v-card>
                </v-col>
            </v-row>
            </v-container>
    </div>
</template>

<script>
export default {
    name:"HeighlightNew",
    data(){
        return{
            cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
        }
    }
}
</script>