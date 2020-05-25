<template>
    <div class="main_dashboard" style="margin-top: 150px;">
        <div class="cardListContent bg-color" style="min-height: 500px;" v-for="(items , i) in news" :key="i">
          <v-container>
              <v-card flat>
                    <v-container fluid>
                    <v-row class="child-flex">
                        <div>
                        <v-toolbar color="elevation-0" style="padding: 5px;">
                            <v-toolbar-title><H3>{{items[0].category }}</H3></v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        </div>
                    </v-row>
                    </v-container>
                </v-card>
            <v-row>
              <v-col cols="12" xs="12" sm="6" md="6"  v-for="item in items" :key="item._id">
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
</template>


<script>
import{ SERVER_PORT } from '../../config/config'
import {mapState} from 'vuex'
export default {
    name : "DashboardBg",
    data() {
        return {
            data_detail : false,
            select_data : [],
            news        : [],
        }
    },

    created(){
        this.getNews();
        this.filtersNews()
    },

    computed:{
        ...mapState(['userProfile','Newsdata',])
        
    },

    methods: {
        getNews:async function (){
            try {
                const News = await this.axios.request({
                methods: "get",
                url : `${SERVER_PORT}/api/summarizednews`,
                }).then(res => {
                this.$store.commit('addNewsdata', res.data)
                }).catch(res => {
                console.error(res)
                })
            } catch (error) {
                console.error(error)
            }
        },

        senddata: async function (item) {
            this.data_detail = true;
            this.select_data = await item
        },

        filtersNews : async function(){
            const news = this.Newsdata
            let filter
            let filternew

            if(this.userProfile){
                if(this.userProfile.collection[0]){
                    filter = 'สังคม'
                    filternew = news.filter(({ category }) => filter.includes(category));
                    if(filternew.length !== 0){
                        this.news.push(filternew)
                    }
                }
                if(this.userProfile.collection[1]){
                     filter = 'การเมือง'
                     filternew = news.filter(({ category }) => filter.includes(category));
                    if(filternew.length !== 0){
                        this.news.push(filternew)
                    }
                }
                if(this.userProfile.collection[2]){
                     filter = 'ต่างประเทศ'
                     filternew = news.filter(({ category }) => filter.includes(category));
                    if(filternew.length !== 0){
                        this.news.push(filternew)
                    }
                }
                if(this.userProfile.collection[3]){
                     filter = 'อาชญากรรม'
                     filternew = news.filter(({ category }) => filter.includes(category));
                    if(filternew.length !== 0){
                        this.news.push(filternew)
                    }
                }
                if(this.userProfile.collection[4]){
                     filter = 'ภูมิภาค'
                     filternew = news.filter(({ category }) => filter.includes(category));
                    if(filternew.length !== 0){
                        this.news.push(filternew)
                    }
                }
                if(this.userProfile.collection[5]){
                     filter = 'กีฬา'
                     filternew = news.filter(({ category }) => filter.includes(category));
                     if(filternew.length !== 0){
                        this.news.push(filternew)
                    }
                }
            }
            this.$store.commit('setfilterNews' , this.news )
        }
    },
}
</script>

<style scoped>
.main_dashboard{
    background-color: #ffffff;
}
</style>