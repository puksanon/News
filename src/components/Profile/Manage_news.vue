<template>
    <div class="manage_new">
        <div class="main_content">
            <div class="pl_header">
                <v-parallax
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-parallax>
            </div>
            <div class="data_table">
                <v-data-table
                :headers="headers"
                :items="news"
                sort-by="_id"
                class="newtableData"
                height="650"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>News List</v-toolbar-title>
                            <v-divider
                            class="mx-4"
                            inset
                            vertical
                            ></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="800" >
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                            </template>
                            <v-card>
                              <v-form ref="submit_news" v-model="valid" >
                                <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                <v-container>
                                    <v-row>
                                     <v-col cols="auto" v-if="editedItem.imageUrl !== 1 && editedItem.imageUrl !== ''">
                                      <v-img
                                        height="auto"
                                        width="100%"
                                        :src="editedItem.imageUrl"
                                      ></v-img>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field v-model="editedItem.title" label="title" :rules="inputRules" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-textarea auto-grow v-model="editedItem.content" label="content" :rules="inputRules" required></v-textarea>
                                    </v-col>
                                    <v-col cols="12" sm="4" md="4">
                                        <v-text-field auto-grow v-model="editedItem.category" label="category" :rules="inputRules" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="4" md="4">
                                        <v-text-field v-model="editedItem.publisher" label="publisher" :rules="inputRules" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="4" md="4">
                                        <v-text-field v-model="editedItem.author" label="author" :rules="inputRules" required></v-text-field>
                                    </v-col>
                                     <v-col v-if="editedIndex === -1" cols="12" sm="4" md="12">
                                        <v-text-field  v-model="editedItem.sourceUrl" label="sourceUrl" :rules="inputRules" required></v-text-field>
                                    </v-col>
                                     <v-col v-if="editedIndex === -1" cols="12" sm="4" md="12">
                                        <v-text-field  v-model="editedItem.publishAt" label="publishAt" :rules="inputRules" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12" v-if="editedIndex === -1 ">
                                        <v-text-field 
                                            v-model="image"
                                            show-size 
                                            label="image url"
                                            prepend-icon="mdi-clipboard-text-multiple-outline"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col v-if="editedIndex === -1" cols="12" sm="4" md="12">
                                        <v-text-field  v-model="editedItem.tags" label="Tags / Keywords" :rules="inputRules" required></v-text-field>
                                    </v-col>
                                    <v-col v-if="editedIndex === -1" cols="12" sm="4" md="12">
                                        <v-text-field  v-model="editedItem.language" label="language" :rules="inputRules" required></v-text-field>
                                    </v-col>
                                    </v-row>
                                </v-container>
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" text :disabled="!valid" @click="save">Save</v-btn>
                                </v-card-actions>
                                </v-form>
                            </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.action="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            edit
                        </v-icon>
                        <v-icon
                            small
                            @click="cf_delete(item._id)"
                        >
                            delete
                        </v-icon>
                    </template>
                     <template v-slot:no-data>
                      <v-btn color="primary" @click="this.getNews()">Reset</v-btn>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<script>
import{ SERVER_PORT } from '../../config/config'
import  authHeader from '../../autheader/headers'
  export default {
    name: "ManageNews",
    data: () => ({
        news : [],
        valid: true,
        dialog: false,
        image : [],
        headers: [
        { text: 'Title', value: 'title' },
        { text: 'Category', value: 'category' },
        { text: 'Publisher', value: 'publisher' },
        { text: 'Date', value: 'publishAt' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        title: '',
        content: '',
        author: '',
        category: '',
        sourceUrl : '',
        publishAt : '',
        publisher : '',
        imageUrl  : '',
        language : '',
        tags    : ''
      },
      defaultItem: {
        title: '',
        content: '',
        author: '',
        category: '',
        sourceUrl : '',
        publishAt : '',
        publisher : '',
        imageUrl  : '',
        language : '',
        tags    : ''
      },
        inputRules :[
          v => !!v || 'Input is required'
        ],
    }),

    created(){
      this.getNews()
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit News'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    methods: {
      async getNews (){
        try {
          const News = await this.axios.request({
            methods: "get",
            url : `${SERVER_PORT}/api/summarizednews`,
            headers : authHeader()
          }).then(res => {
            this.news = res.data
          }).catch(res => {
            console.error(res)
          })
        } catch (error) {
          console.error(error)
        }
      },

      editItem (item) {
        this.editedIndex = this.news.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      cf_delete: function (id) {
            this.$swal({
                title: 'Are you sure?',
                text: `Do you want to delete news`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this.deleteItem(id)
                }
            })
      },

      async InsertNews(){
        
        var today = new Date();
        var formData = {
              title     : this.editedItem.title,
              content   : this.editedItem.content,
              author    : this.editedItem.author,
              category  : this.editedItem.category,
              sourceUrl : this.editedItem.sourceUrl,
              publishAt : today,
              publisher : this.editedItem.publisher,
              language  : this.editedItem.language,
              tags      : this.editedItem.tags,
              imageUrl  : this.image,
          };

          var myJSON = JSON.stringify(formData);
          console.log(myJSON)

          if (this.$refs.submit_news.validate()) {
              try{
                  return  await this.axios.post(
                      `${SERVER_PORT}/api/summarizednews`,
                      myJSON,
                      { headers : 
                         {
                           'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VtbWFyaXplU2VydmVyIiwiZHQiOiIyMDE2LTA4LTI5VDA5OjEyOjMzLjAwMVoiLCJpYXQiOjE1OTAwMTcxMjN9.5644l8oVxelZBIBUIajc-mPwMG0nqEVwZk9248FR74Y',
                          'Content-Type'  : 'application/json',
                         }
                      }).then(res => {
                                  this.$swal({
                                      toast: true,
                                      position: 'bottom-end',
                                      icon: 'success',
                                      title: 'Insert news success',
                                      timerProgressBar: true,
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                                  this.getNews()
                          })
                          .catch(err => {
                              this.$swal({
                                  toast: true,
                                  position: 'bottom-end',
                                  icon: 'error',
                                  title: 'Insert news false',
                                  timerProgressBar: true,
                                  showConfirmButton: false,
                                  timer: 1500
                              });
                          })
              }catch(err){
                    console.error(err)
              }
          }
      },

      async deleteItem(id){
        try {
          const res = await this.axios.request({
            method: 'delete',
            url: `${SERVER_PORT}/api/summarizednews/${id}`,
            headers : authHeader()
          }).then((response)=> {
            this.$swal({
                toast: true,
                position: 'bottom-end',
                icon: 'success',
                title: 'Delete new success',
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 1500
            });
            this.getNews()
          }).catch((error) =>{
            this.$swal({
                toast: true,
                position: 'bottom-end',
                icon: 'error',
                title: error.message,
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 1500
            });
          })
        } catch (error) {
          console.error(error)
        }
      },

      async editNews () {
          const formData = {
              id        : this.editedItem._id,
              title     : this.editedItem.title,
              content   : this.editedItem.content,
              author    : this.editedItem.author,
              category  : this.editedItem.category,
              sourceUrl : this.editedItem.sourceUrl,
              publishAt : this.editedItem.publishAt,
              publisher : this.editedItem.publisher,
              imageUrl  : this.editedItem.imageUrl,
              language  : this.editedItem.language,
              tags      : this.editedItem.tags,
          };

          const encodeForm = (data) => {
              return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
          };

          let id = this.editedItem._id
          let url  = `${SERVER_PORT}/api/summarizednews/${id}`

          try{
              return await this.axios.put(
                          url, 
                          encodeForm(formData),
                          { headers: authHeader()}
              ).then(res => {
                  this.$swal({
                          toast: true,
                          position: 'bottom-end',
                          icon: 'success',
                          title: 'edit news success',
                          timerProgressBar: true,
                          showConfirmButton: false,
                          timer: 1500
                  });
                  this.getNews()
                  this.dialog = false;
              }).catch(err => {
                  this.$swal({
                      toast: true,
                      position: 'bottom-end',
                      icon: 'error',
                      title: err.message,
                      timerProgressBar: true,
                      showConfirmButton: false,
                      timer: 1500
                  });
              })
          }catch(err){
              
          }
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          //edit
          this.editNews()
        } else {
          //news
          this.InsertNews()
        }
        this.close()
      },
    },
  }
</script>