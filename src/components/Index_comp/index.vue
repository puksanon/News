<template>
  <div class="Index">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <div class="main_content">
        <div class="block_highlight">
          <CarouselsHighlight></CarouselsHighlight>
        </div>

        <div class="navbar manu-search">
          <v-card flat>
            <v-container fluid>
              <v-row class="child-flex">
                <div>
                  <v-toolbar color="elevation-0" style="padding: 5px;">
                     <v-app-bar-nav-icon  class="hidden-sm-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
                    <v-toolbar-title><H3>Filter</H3></v-toolbar-title>

                    <v-spacer></v-spacer>
                    <v-text-field
                            append-icon="mic"
                            class="mx-4"
                            flat
                            hide-details
                            label="Search"
                            prepend-inner-icon="search"
                            solo-inverted
                          ></v-text-field>
                          
                  </v-toolbar>
                </div>
              </v-row>
            </v-container>
          </v-card>
        </div>

        <div class="navbar manu-slidebar" >
          <v-navigation-drawer class="hidden-sm-and-up" 
            v-model="sidebar"
            absolute
            temporary 
            app>
            <v-list shaped>
              <v-subheader>COLLECTION TYPES</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="item in items"
                  :key="item.id"
                  @click="addItem(item.name)"
                >
                  <v-list-item-icon>
                    <v-icon :color="item.color" v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>


            <v-card flat>
              <v-toolbar color="elevation-0" class="hidden-xs-only"
              >
                <template >
                  <v-tabs
                    background-color="transparent"
                    fixed-tabs
                    icons-and-text
                    slider-color="black"
                  >
                    <v-tab
                      v-for="item in items"
                      :key="item.id"
                      @click="addItem(item.name)"
                      color="black"
                    >
                      {{ item.name }}
                       <v-icon :color="item.color">{{ item.icon }}</v-icon>
                    </v-tab>

                    <v-menu
                      v-if="more.length"
                      bottom
                      left
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          text
                          class="align-self-center mr-4"
                          v-on="on"
                        >
                          more
                          <v-icon right>mdi-menu-down</v-icon>
                        </v-btn>
                      </template>

                      <v-list class="grey lighten-3">
                        <v-list-item
                          v-for="item in more"
                          :key="item"
                          @click="addItem(item)"
                          prepend-inner-icon="mdi-phone"
                        >
                          {{ item }}
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-tabs>
                </template>
              </v-toolbar>


                  <div class="new_content" style="min-height: 500px;">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6" v-for="item in get_items" :key="item.id">
                          <v-card
                            class="mx-auto"
                            color="#385F73"
                            dark
                            height="250"
                          >
                            <v-img
                              class="white--text align-end"
                              height="250px"
                              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            >
                              <v-card-title class="headline">{{ item.id }}</v-card-title>
                              <v-card-subtitle>DETAIL: {{ item.name }}</v-card-subtitle>
                              <v-card-actions>
                                <v-card-text><v-chip outlined>{{ item.type }}</v-chip></v-card-text>
                                <v-spacer></v-spacer>
                                <v-btn  text :to="'/new_detail/'+item.type+'/'+item.id">Read more</v-btn>
                              </v-card-actions>
                            </v-img>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
               
       
            </v-card>

        </div>

      </div>
  </div>
</template>

<script>
const CarouselsHighlight = () => import("../Elements/CarouselsHighlight")
const Navbar = () => import('../Elements/Navbar')
export default {
  name: 'Index',
  components: {
      Navbar,CarouselsHighlight
  },
  data: () => ({
      sidebar: false,
      get_items: [],
      items: [
       { id:"1" ,name: "SPORT" ,icon: "mdi-swim" ,color: "pink lighten-2"},
       { id:"2" ,name: "IT" ,icon: "mdi-apple"  ,color: "blue lighten-2"},
       { id:"3" ,name: "GAME" ,icon: "mdi-gamepad-variant"  ,color: "deep-purple lighten-2"},
       { id:"4" ,name: "ENTERTAIN" ,icon: "mdi-glass-tulip" ,color: "teal lighten-2"},
       { id:"5" ,name: "POLICY" ,icon: "mdi-web"    ,color: "yellow lighten-2"},
      ],
      more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps',
      ],
      SPORT: [  {id:"1" ,name: "a", age: 31, city: "New York" ,type:"SPORT"},
            {id:"2" ,name: "b", age: 31, city: "New York" ,type:"SPORT"},
            {id:"3" ,name: "b", age: 31, city: "New York" ,type:"SPORT"},
            {id:"4" ,name: "b", age: 31, city: "New York" ,type:"SPORT"},
      ],
      IT: [ {id:"1" ,name: "c", age: 31, city: "New York" ,type:"IT"}],
  }),

  created() {
    this.get_items = this.SPORT
  },

  methods: {
    addItem (item) {
      if (item === 'SPORT'){
        this.get_items = this.SPORT
      }else if(item === 'IT'){
        this.get_items = this.IT
      }
    },
  },
}
</script>

<style scoped>

</style>
