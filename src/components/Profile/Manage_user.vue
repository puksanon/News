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
                            <v-dialog v-model="dialog" max-width="900px">
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark class="mb-2" v-on="on">New User</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                <v-container>
                                    <v-list three-line subheader>
                                        <v-subheader>User Controls</v-subheader>
                                        <v-list-item>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-list-item-title>First Name</v-list-item-title>
                                                <v-text-field label="First Name" v-model="editedItem.fname" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-list-item-title>Last Name</v-list-item-title>
                                                <v-text-field label="Last Name" v-model="editedItem.lname"  required></v-text-field>
                                            </v-col> 
                                            <v-col cols="12" sm="6" md="4">
                                                <v-list-item-title>Nick Name</v-list-item-title>
                                                <v-text-field label="Nick Name" v-model="editedItem.nname" required></v-text-field>
                                            </v-col> 
                                            </v-row>
                                        </v-list-item>

                                        <v-list-item>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-list-item-title>Age</v-list-item-title>
                                                <v-select
                                                v-model="editedItem.age"
                                                :items="['0-17', '18-29', '30-54', '54+']"
                                                label="Age*"
                                                required
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-list-item-title>Email</v-list-item-title>
                                                <v-text-field label="Email" v-model="editedItem.email" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-list-item-title>Phone</v-list-item-title>
                                                <v-text-field label="Phone" v-model="editedItem.phone" required></v-text-field>
                                            </v-col>  
                                            </v-row>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-list-item-title>Username</v-list-item-title>
                                                    <v-text-field label="Username" v-model="editedItem.username" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-list-item-title>Password</v-list-item-title>
                                                    <v-text-field label="Password" type="password" v-model="editedItem.password" required></v-text-field>
                                                </v-col>
                                                
                                            </v-row>
                                        </v-list-item>
                                    </v-list>
                                        <v-divider></v-divider>
                                        <v-list three-line subheader>
                                        <v-subheader>Select favorite types(3) </v-subheader>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-list-item>
                                                        <v-list-item-action>
                                                        <v-checkbox v-model="editedItem.q1"></v-checkbox>
                                                        </v-list-item-action>
                                                        <v-list-item-content>
                                                        <v-list-item-title>SPORT</v-list-item-title>
                                                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-list-item>
                                                        <v-list-item-action>
                                                        <v-checkbox v-model="editedItem.q2"></v-checkbox>
                                                        </v-list-item-action>
                                                        <v-list-item-content>
                                                        <v-list-item-title>IT</v-list-item-title>
                                                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-list-item>
                                                        <v-list-item-action>
                                                        <v-checkbox v-model="editedItem.q3"></v-checkbox>
                                                        </v-list-item-action>
                                                        <v-list-item-content>
                                                        <v-list-item-title>GAME</v-list-item-title>
                                                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-list-item>
                                                        <v-list-item-action>
                                                        <v-checkbox v-model="editedItem.q4"></v-checkbox>
                                                        </v-list-item-action>
                                                        <v-list-item-content> 
                                                        <v-list-item-title>LIFE</v-list-item-title>
                                                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-list-item>
                                                        <v-list-item-action>
                                                        <v-checkbox v-model="editedItem.q5"></v-checkbox>
                                                        </v-list-item-action>
                                                        <v-list-item-content>
                                                        <v-list-item-title>POLICY</v-list-item-title>
                                                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-list-item>
                                                        <v-list-item-action>
                                                        <v-checkbox v-model="editedItem.q6"></v-checkbox>
                                                        </v-list-item-action>
                                                        <v-list-item-content>
                                                        <v-list-item-title>NATURE</v-list-item-title>
                                                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-col>
                                            </v-row>
                                    </v-list>
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
    name: "Manage_user_comp",
    components: {
        Navbar
    },
    data: () => ({
        dialog: false,
        selected: [],
        headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        { text: 'First Name', value: 'fname' },
        { text: 'Last Name', value: 'lname' },
        { text: 'Nick Name', value: 'nname' },
        { text: 'Age', value: 'age' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
        { text: 'Username', value: 'username' },
        { text: 'Action', value: 'action', sortable: false  },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        fname: '',
        lname: '',
        nname: '',
        age: '',
        email:'',
        phone:'',
        username:'',
        password: '',
        q1:false,
        q2:false,
        q3:false,
        q4:false,
        q5:false,
        q6:false,
      },
      defaultItem: {
        fname: '',
        lname: '',
        nname: '',
        age: '',
        email:'',
        phone:'',
        username:'',
        password: '',
        q1:false,
        q2:false,
        q3:false,
        q4:false,
        q5:false,
        q6:false,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
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
            {id:"1" ,fname: "test", lname:"test", nname: "test" ,age:"0-17" ,email:"test@test.com" 
            ,phone: "0123456789" ,username:"test" ,password:"1234",q1: true ,q2: true ,q3: true , q4: false ,q5: false, q6: false},
            {id:"2" ,fname: "test", lname:"test", nname: "test" ,age:"0-17" ,email:"test@test.com" 
            ,phone: "0123456789" ,username:"test" ,password:"1234",q1: true ,q2: true ,q3: true , q4: false ,q5: false, q6: false},
            {id:"3" ,fname: "test", lname:"test", nname: "test" ,age:"0-17" ,email:"test@test.com" 
            ,phone: "0123456789" ,username:"test" ,password:"1234",q1: true ,q2: true ,q3: true , q4: false ,q5: false, q6: false},
            {id:"4" ,fname: "test", lname:"test", nname: "test" ,age:"0-17" ,email:"test@test.com" 
            ,phone: "0123456789" ,username:"test" ,password:"1234",q1: true ,q2: true ,q3: true , q4: false ,q5: false, q6: false},
            {id:"5" ,fname: "test", lname:"test", nname: "test" ,age:"0-17" ,email:"test@test.com" 
            ,phone: "0123456789" ,username:"test" ,password:"1234",q1: true ,q2: true ,q3: true , q4: false ,q5: false, q6: false},
            {id:"6" ,fname: "test", lname:"test", nname: "test" ,age:"0-17" ,email:"test@test.com" 
            ,phone: "0123456789" ,username:"test" ,password:"1234",q1: true ,q2: true ,q3: true , q4: false ,q5: false, q6: false},
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
