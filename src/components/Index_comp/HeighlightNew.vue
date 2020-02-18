<template>
    <div class="HeighlightNew bg-color">
          <v-container>
            <v-carousel
              cycle
              height="690"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="card in cards"
                :key="card.id"
              >
              <v-toolbar color="transparent" flat >
                  <v-toolbar-title class=" black--text">HIGHLIGHT COLLECTION : {{ card.group }}</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-row dense>
                    <v-col
                    v-for="item in card.items"
                    :key="item.id"
                    :cols="item.flex"
                    :xs="item.xs"
                    :sm="item.sm"
                    >
                    <v-card height="300">
                        <v-img
                        :src="item.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="100%"
                        >
                        <v-card-title>{{ item.name }}</v-card-title>
                        <v-card-subtitle>{{ item.detail }}</v-card-subtitle>
                        <v-card-actions>
                            <v-card-text><v-chip outlined color="white">{{item.type}}</v-chip></v-card-text>
                            <v-spacer></v-spacer>
                            <v-btn color="white" text v-on:click="senddata(item)">READ MORE</v-btn>
                            <template>
                                <div class="text-center">
                                  <v-dialog
                                    v-model="data_detail"
                                    width="1000"
                                  >
                                    <v-card>
                                      <v-img
                                        class="white--text align-end"
                                        height="400px"
                                        :src="select_data.src"
                                      ></v-img>
                                      <v-card-title
                                        primary-title
                                      >
                                        {{ select_data.name }} 
                                      </v-card-title>

                                      <v-card-text>
                                        {{ select_data.description}}
                                      </v-card-text>

                                      <v-card-actions>
                                        <v-card-text><v-chip outlined>{{ item.type }}</v-chip></v-card-text>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                          color="primary"
                                          text
                                          @click="data_detail = false"
                                        >
                                          CLOSE
                                        </v-btn>
                                      </v-card-actions>
                                    </v-card>
                                  </v-dialog>
                                </div>
                            </template>
                        </v-card-actions>
                        </v-img>

                    </v-card>
                    </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-container>
    </div>
</template>

<script>
export default {
    name:"HeighlightNew",
    data(){
        return{
            cards: [{
                id: 1, group:"SPORT" , items: [
                  { id:"1" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"SPORT" , src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 , xs:12 ,sm: 12},
                  { id:"2" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"SPORT" , src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 , xs:12 ,sm: 6},
                  { id:"3" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"SPORT" , src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 , xs:12,sm: 6}
                ]},
                {
                id: 2, group:"GAME" , items: [ 
                  { id:"1" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"game" , src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 , xs:12 ,sm: 12},
                  { id:"2" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"game" , src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 , xs:12 ,sm: 6},
                  { id:"3" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"game" , src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 , xs:12,sm: 6}]
            },
            {
                id: 3, group:"IT"   , items: [
                  { id:"1" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"it" , src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 , xs:12 ,sm: 12},
                  { id:"2" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"it" , src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 , xs:12 ,sm: 6},
                  { id:"3" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"it" , src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 , xs:12,sm: 6}]
            }],
            data_detail: false,
            select_data : []
        }
    },

    methods:{
      senddata (item) {
        this.select_data = item
        console.log(this.select_data)
        this.data_detail = true;
      }
    }
}
</script>

<style  scoped>
.bg-color{
  background-color: #ffffff;
}
</style>