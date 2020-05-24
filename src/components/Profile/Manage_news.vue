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
                              <v-form ref="submit_news" v-model="valid" enctype="multipart/form-data">
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
                                        <v-file-input 
                                            id="image"
                                            name="image"
                                            v-model="image"
                                            ref="image"
                                            accept=".jpg"
                                            show-size 
                                            label="File input"
                                            prepend-icon="mdi-clipboard-text-multiple-outline"
                                        ></v-file-input>
                                    </v-col>
                                    <v-col v-if="editedIndex === -1" cols="12" sm="4" md="12">
                                        <v-text-field  v-model="editedItem.tags" label="Tags / Keywords" :rules="inputRules" required></v-text-field>
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
            url : "http://localhost:3000/api/summarizednews",
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
        const formData = new FormData();
              formData.append('imageUrl'  , this.image );
              formData.append('title'     , this.editedItem.title);
              formData.append('content'  , this.editedItem.content);
              formData.append('author'  , this.editedItem.author);
              formData.append('category'  , this.editedItem.category);
              formData.append('sourceUrl' , this.editedItem.sourceUrl);
              formData.append('publishAt', this.editedItem.publishAt);
              formData.append('publisher' , this.editedItem.publisher);
              formData.append('tags'  , this.editedItem.tags);  
              formData.append('language'  , this.editedItem.language);  


          if (this.$refs.submit_news.validate()) {
              try{
                  return  await this.axios.request({
                      method  : 'post',
                      url     : 'http://localhost:3000/api/summarizednews',
                      headers :  authHeader(),
                      data    : formData
                          }).then(res => {
                              if(res.data.success){
                                  this.$swal({
                                      toast: true,
                                      position: 'bottom-end',
                                      icon: 'success',
                                      title: 'Insert news success',
                                      timerProgressBar: true,
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                                  this.$router.push('/home')
                              }else{
                                  this.$swal({
                                      toast: true,
                                      position: 'bottom-end',
                                      icon: 'error',
                                      title: `${res.data.message}`,
                                      timerProgressBar: true,
                                      showConfirmButton: false,
                                      timer: 1500
                                  });
                              }
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
            url: `http://localhost:3000/api/summarizednews/${id}`,
            headers : authHeader()
          }).then((response)=> {
            this.$swal({
                toast: true,
                position: 'bottom-end',
                icon: 'success',
                title: response,
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 1500
            });
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

          let id = this.editedItem.curriculum_id
          let url  = `http://localhost:3000/api/summarizednews/${id}`

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
                  this.intialCuriculum();
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