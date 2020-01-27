<template>
  <div class="nav_navi">
    <v-card class="overflow-hidden">
      <v-app-bar
        fixed
        color="white"
        style="border-radius: 0;"
        height="100"
      >
        <v-app-bar-nav-icon  class="hidden-sm-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
        <v-avatar color="red" style="margin-right: 20px;">
          <span class="white--text headline">Ns</span>
        </v-avatar>
        <v-toolbar-title><h1>news</h1></v-toolbar-title>

        <v-spacer></v-spacer>
         <v-text-field
            append-icon="mic"
            class="mx-7 hidden-xs-only" 
            flat
            hide-details
            label="Search"
            prepend-inner-icon="search"
            solo-inverted
          ></v-text-field>
        <Signin></Signin>
      
      </v-app-bar>
    </v-card>

    <v-navigation-drawer class="hidden-sm-and-up" v-model="sidebar" app>
      <v-list shaped>
        <v-subheader>COLLECTION TYPES</v-subheader>
        <v-text-field
            class="mx-2" 
            flat
            hide-details
            label="Search"
            prepend-inner-icon="search"
            solo-inverted
          ></v-text-field>
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
  </div>
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
        items: [
        { id:"1" ,name: "SPORT"  ,icon: "mdi-swim" ,color: "pink lighten-2"},
        { id:"2" ,name: "IT"     ,icon: "mdi-apple"  ,color: "blue lighten-2"},
        { id:"3" ,name: "GAME"   ,icon: "mdi-gamepad-variant"  ,color: "deep-purple lighten-2"},
        { id:"4" ,name: "ENTERTAIN" ,icon: "mdi-glass-tulip" ,color: "teal lighten-2"},
        { id:"5" ,name: "POLICY" ,icon: "mdi-web"    ,color: "yellow lighten-2"},
        ],
        sidebar: false,
      }
    },

    methods: {
      addItem(item){
        this.$emit("send_collection", item);
      }
    },
}
</script>