<template>
  <div class="Index">
    <div class="main_content">
        <div class="block_highlight mt-80">
          <CarouselsHighlight></CarouselsHighlight>
        </div>

        <!-- <div class="HeighlightNew">
          <HeighlightNew></HeighlightNew>
        </div> -->

        <div class="navbar manu-search">
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
        </div>

        <div class="navbar manu-list" >
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
                </v-tabs>
              </template>
            </v-toolbar>
          </v-card>
        </div>

        <div class="cardListContent bg-color" style="min-height: 500px;">
          <v-container>
            <v-row>
              <v-col cols="12" xs="12" sm="6" md="6"  v-for="item in news" :key="item._id">
                <v-card
                  class="mx-auto"
                  color="#385F73"
                  dark
                  height="280"
                >
                  <v-img
                    class="white--text align-end"
                    height="280"
                    :src="item.imageUrl"
                  >
                    <v-card-title class="headline">{{ item.title }}</v-card-title>
                    <!-- <v-card-subtitle>{{ item.content }} </v-card-subtitle> -->
                    <v-card-actions>
                      <v-card-text v-if="item.category !== 'Undefined'">
                        <v-chip outlined >{{ item.category }}</v-chip>
                      </v-card-text>
                      <v-spacer></v-spacer>
                      <v-btn text @click="senddata(item)">READ MORE</v-btn>
                    </v-card-actions>
                  </v-img>
                </v-card>
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
                                  :src="select_data.imageUrl"
                                ></v-img>
                                <v-card-title
                                  primary-title
                                >
                                  {{ select_data.title }} 
                                </v-card-title>

                                <v-card-text>
                                  {{ select_data.content}}
                                </v-card-text>

                                <v-card-actions>
                                  <v-card-text><v-chip outlined>{{ select_data.category }}</v-chip></v-card-text>
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
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
  </div>
</template>

<script>
import{ SERVER_PORT } from '../../config/config'
import { mapState } from 'vuex'
import authHeader from '../../autheader/headers'
const CarouselsHighlight = () => import("../Elements/CarouselsHighlight");
export default {
  name: 'Index',
  components: {
      CarouselsHighlight
  },
  data: () => ({
      sidebar: false,
      data_detail: false,
      news : [],
      items: [
       { id:"1" ,name: "ข่าวทั้งหมด"  ,icon: "mdi-swim" ,color: "pink lighten-2"},
       { id:"2" ,name: "สังคม"     ,icon: "mdi-apple"  ,color: "blue lighten-2"},
       { id:"3" ,name: "การเมือง"   ,icon: "mdi-gamepad-variant"  ,color: "deep-purple lighten-2"},
       { id:"4" ,name: "ต่างประเทศ" ,icon: "mdi-glass-tulip" ,color: "teal lighten-2"},
       { id:"5" ,name: "อาชญากรรม" ,icon: "mdi-web"    ,color: "yellow lighten-2"},
       { id:"6" ,name: "ภูมิภาค" ,icon: "mdi-web"    ,color: "yellow lighten-2"},
      ],
      select_data:[]
  }),

  created() {
    this.getNews()
  },

    computed: {
        ...mapState(['Newsdata'])
    },

  methods: {
    addItem (category) {
     const olddata = this.Newsdata;
     const cate = category;
     if(category !== 'ข่าวทั้งหมด'){
       this.news = olddata.filter(({ category }) => cate.includes(category));
     }else{
       this.getNews()
     }
    },

    senddata: async function (item) {
      this.data_detail = true;
      this.select_data = await item
    },

    getNews:async function (){
      try {
        const News = await this.axios.request({
          methods: "get",
          url : `${SERVER_PORT}/api/summarizednews`,
          headers : authHeader()
        }).then(res => {
          this.news = res.data
          this.$store.commit('addNewsdata', res.data)
        }).catch(res => {
          console.error(res)
        })
      } catch (error) {
        console.error(error)
      }
    }
  },
}
</script>

<style scoped>
.mt-80{
  margin-top: 80px;
}

.bg-color{
  background-color: #ffffff;
}
</style>

