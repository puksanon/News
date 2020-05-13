<template>
  <v-row style="padding-left: 25px;">
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <v-form ref="signup_form" v-model="signup_form"> 
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Sign Up</v-btn>
        </template>
        <v-card>
            <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>SIGN UP</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark text @:disabled="!signup_form" @click="SingUp()">Sign Up</v-btn>
            </v-toolbar-items>
            </v-toolbar>
        
                <v-list three-line subheader>
                    <v-subheader>User Controls</v-subheader>
                    <v-list-item>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item-title>First Name </v-list-item-title>
                            <v-text-field v-model="fname" :rules="InputRules" label="First Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item-title>Last Name</v-list-item-title>
                            <v-text-field v-model="lname" :rules="InputRules" label="Last Name" required></v-text-field>
                        </v-col> 
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item-title>Nick Name</v-list-item-title>
                            <v-text-field v-model="nname" :rules="InputRules" label="Nick Name"  required></v-text-field>
                        </v-col> 
                        </v-row>
                    </v-list-item>

                    <v-list-item>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item-title>Age</v-list-item-title>
                            <v-select
                            v-model="age"
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item-title>Email</v-list-item-title>
                            <v-text-field v-model="email" label="Email" :rules="emailRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item-title>Phone</v-list-item-title>
                            <v-text-field v-model="phone" label="Phone" :rules="InputRules" required></v-text-field>
                        </v-col>  
                        </v-row>
                    </v-list-item>

                    <v-list-item>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-list-item-title>Username</v-list-item-title>
                                <v-text-field v-model="username" label="Username" :rules="usernameRules" counter="15" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-list-item-title>Password</v-list-item-title>
                                <v-text-field v-model="password" label="Password" type="password" :rules="passwordRules" counter="15" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-list-item-title>Confirm Password</v-list-item-title>
                                <v-text-field v-model="cfpassword" label="Confirm Password"  type="password" :rules="passwordRules" counter="15" required></v-text-field>
                            </v-col>  
                        </v-row>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list three-line subheader>
                <v-subheader>Select favorite types(3)</v-subheader>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item>
                                <v-list-item-action>
                                <v-checkbox v-model="q1"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                <v-list-item-title>SPORT</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item>
                                <v-list-item-action>
                                <v-checkbox v-model="q2"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                <v-list-item-title>IT</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item>
                                <v-list-item-action>
                                <v-checkbox v-model="q3"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                <v-list-item-title>GAME</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item>
                                <v-list-item-action>
                                <v-checkbox v-model="q4"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content> 
                                <v-list-item-title>LIFE</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item>
                                <v-list-item-action>
                                <v-checkbox v-model="q5"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                <v-list-item-title>POLICY</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-list-item>
                                <v-list-item-action>
                                <v-checkbox v-model="q6"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                <v-list-item-title>NATURE</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-list>
        
        </v-card>
      </v-form> 
    </v-dialog>
  </v-row>
</template>

<script>
import { auth } from '../../firebase/firebaseInit'
export default {
    name: "SignUp",
    data () {
      return {
        fname       : "",
        lname       : "",
        nname       : "",
        pid         : "",
        email       : "",
        phone       : "",
        username    : "",
        password    : "",
        cfpassword  : "",
        age: "",
        dialog: false,
        signup_form : true,
        q1:false,
        q2:false,
        q3:false,
        q4:false,
        q5:false,
        q6:false,
        emailRules: [
            email => !!email || 'E-mail is required',
            email => /.+@.+\..+/.test(email) || 'E-mail must be valid',
        ],
        usernameRules: [
            username => !!username || 'Username is required',
            username => (username && username.length <= 15) || 'Username must be less than 15 characters',
        ],
        InputRules: [
            input => !!input || 'input is required',
        ],
        passwordRules: [
            password => !!password || 'Password is required',
            password => (password && password.length >= 6) || 'Password must be more than 6 characters',
            password => (password && password.length <= 15) || 'Password must be less than 15 characters',
        ],
      }
    },

    methods: {
        async SingUp(){
            if (this.password === this.cfpassword ){
                await auth.createUserWithEmailAndPassword(this.email, this.password).then((res) => {
                    const Uid       = res.user.uid 
                    usersCollection.doc(Uid).set({
                        fname       : this.fname,
                        lname       : this.lname,
                        pid         : this.pid,
                        email       : this.email,
                        phone       : this.phone,
                        nname       : this.nname,
                        username    : this.username,
                        password    : this.password,
                        permission  : 'user',
                        collection  : [
                            {
                                q1 : this.q1,
                                q2 : this.q2,
                                q3 : this.q3,
                                q4 : this.q4,
                                q5 : this.q5,
                                q6 : this.q6,
                            }
                        ]
                    }).then(() =>{
                        this.$swal({
                            toast: true,
                            position: 'bottom-end',
                            icon: 'success',
                            title: 'insert data success',
                            timerProgressBar: true,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.$router.push('/login')
                    }).catch(err => {
                        this.$swal({
                            toast: true,
                            position: 'bottom-end',
                            icon: 'error',
                            title: err.message,
                            timerProgressBar: true,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
                }).catch(err => {
                    this.$swal({
                        toast: true,
                        position: 'bottom-end',
                        icon: 'error',
                        title: err.message,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        timer: 1500
                    })
                });           
            }else{
                this.$swal({
                    toast: true,
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Confirm Password not same Password',
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },
    }
  }
</script>