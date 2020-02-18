<template>
    <div class="manage_new">
        <Navbar></Navbar>
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
                :items="desserts"
                sort-by="calories"
                class="elevation-1"
                :single-select="singleSelect"
                show-select
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
                            <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                <v-container>
                                    <v-row>
                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.name" label="name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-textarea auto-grow v-model="editedItem.detail" label="Detail"></v-textarea>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-textarea auto-grow v-model="editedItem.description" label="Description"></v-textarea>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.type" label="Type"></v-text-field>
                                    </v-col>
                                    </v-row>
                                </v-container>
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                                </v-card-actions>
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
                            @click="deleteItem(item)"
                        >
                            delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<script>
const Navbar = () => import('@/components/Elements/Navbar');
  export default {
    name: "ManageNews",
    components: {
        Navbar
    },
    data: () => ({
        singleSelect: false,
        selected: [],
        dialog: false,
        headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Detail', value: 'detail' },
        { text: 'Description', value: 'description' },
        { text: 'Type', value: 'type' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        detail: '',
        description: '',
        type: '',
      },
      defaultItem: {
        name: '',
        detail: '',
        description: '',
        type: '',
      },
    }),

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

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
           {id:"1" ,name: "a1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"SPORT"},
            {id:"2" ,name: "a2", detail:"text", description:"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"SPORT"},
            {id:"3" ,name: "a3", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"SPORT"},
            {id:"4" ,name: "a4", detail:"text", description:"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ,type:"SPORT"},
            {id:"5" ,name: "c1", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",type:"IT"},
            {id:"6" ,name: "c2", detail:"text", description: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",type:"IT"}
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>