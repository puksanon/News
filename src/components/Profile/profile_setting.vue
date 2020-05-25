<template>
    <div class="profile_setting">
        <div class="main_content">
            <div class="pl_header">
                <v-parallax
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                ></v-parallax>
            </div>
            <div class="setting_content">
                <v-card>
                    <v-form ref="signup_form" v-model="update_form"> 
                        <v-list three-line subheader>
                            <v-subheader>User Controls</v-subheader>
                            <v-list-item>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>First Name </v-list-item-title>
                                    <v-text-field v-model="userProfile.fname" :rules="InputRules" label="First Name" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>Last Name</v-list-item-title>
                                    <v-text-field v-model="userProfile.lname" :rules="InputRules" label="Last Name" required></v-text-field>
                                </v-col> 
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>Nick Name</v-list-item-title>
                                    <v-text-field v-model="userProfile.nname" :rules="InputRules" label="Nick Name"  required></v-text-field>
                                </v-col> 
                                </v-row>
                            </v-list-item>

                            <v-list-item>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>Age</v-list-item-title>
                                    <v-select
                                    v-model="userProfile.age"
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Age*"
                                    required
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>Email</v-list-item-title>
                                    <v-text-field v-model="userProfile.email" label="Email" :rules="emailRules" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>Phone</v-list-item-title>
                                    <v-text-field v-model="userProfile.phone" label="Phone" :rules="InputRules" required></v-text-field>
                                </v-col>  
                                </v-row>
                            </v-list-item>

                            <v-list-item>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-list-item-title>Username</v-list-item-title>
                                        <v-text-field v-model="userProfile.username" label="Username" :rules="usernameRules" counter="15" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-list-item-title>New Password</v-list-item-title>
                                        <v-text-field v-model="newpassword" label="New Password"  type="password" counter="15" ></v-text-field>
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
                                        <v-checkbox v-model="userProfile.collection[0]"></v-checkbox>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                        <v-list-item-title>สังคม</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item>
                                        <v-list-item-action>
                                        <v-checkbox v-model="userProfile.collection[1]"></v-checkbox>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                        <v-list-item-title>การเมื่อง</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item>
                                        <v-list-item-action>
                                        <v-checkbox v-model="userProfile.collection[2]"></v-checkbox>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                        <v-list-item-title>ต่างประเทศ</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item>
                                        <v-list-item-action>
                                        <v-checkbox v-model="userProfile.collection[3]"></v-checkbox>
                                        </v-list-item-action>
                                        <v-list-item-content> 
                                        <v-list-item-title>อาชญากรรม</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item>
                                        <v-list-item-action>
                                        <v-checkbox v-model="userProfile.collection[4]"></v-checkbox>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                        <v-list-item-title>ภูมิภาค</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item>
                                        <v-list-item-action>
                                        <v-checkbox v-model="userProfile.collection[5]"></v-checkbox>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                        <v-list-item-title>กีฬา</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                            </v-row>
                        </v-list> 
                        <v-card-actions>
                            <v-btn dark color="primary" :disabled="!update_form" @click="UpdateProfile()">Update Profile</v-btn>        
                        </v-card-actions> 
                    </v-form>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {usersCollection} from '../../firebase/firebaseInit'
import authHeader from '../../autheader/headers'
export default {
    name: "profile_setting",
    data() {
        return {
        newpassword : '',
        update_form : true,
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

    computed: {
        ...mapState(['userProfile','currentUser'])
    },

    methods:{
        UpdateProfile : function(){
            this.$swal.fire({
                title: 'input password',
                input: 'password',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'save',
                showLoaderOnConfirm: true,
                preConfirm: (pass) => {
                    if(this.newpassword){
                        if(pass === this.userProfile.password){
                                usersCollection.doc(this.currentUser.uid).update({
                                    fname       : this.userProfile.fname,
                                    lname       : this.userProfile.lname,
                                    age         : this.userProfile.age,
                                    email       : this.userProfile.email,
                                    phone       : this.userProfile.phone,
                                    nname       : this.userProfile.nname,
                                    username    : this.userProfile.username,
                                    password    : this.newpassword,
                                    collection  : [
                                                    this.userProfile.collection[0],
                                                    this.userProfile.collection[1],
                                                    this.userProfile.collection[2],
                                                    this.userProfile.collection[3],
                                                    this.userProfile.collection[4],
                                                    this.userProfile.collection[5],
                                                  ]
                                })
                                .then(response => {
                                    this.newpassword = '';
                                    this.$swal({
                                        toast: true,
                                        position: 'bottom-end',
                                        icon: 'success',
                                        title: 'update success .',
                                        timerProgressBar: true,
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                })
                                .catch(error => {
                                    this.$swal({
                                        toast: true,
                                        position: 'bottom-end',
                                        icon: 'error',
                                        title: 'update false . please try again!!',
                                        timerProgressBar: true,
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                })   
                        }else{
                            this.$swal({
                                toast: true,
                                position: 'bottom-end',
                                icon: 'error',
                                title: 'password incorrect',
                                timerProgressBar: true,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } 
                    }else{
                        if(pass === this.userProfile.password){
                                usersCollection.doc(this.currentUser.uid).update({
                                    fname       : this.userProfile.fname,
                                    lname       : this.userProfile.lname,
                                    age         : this.userProfile.age,
                                    email       : this.userProfile.email,
                                    phone       : this.userProfile.phone,
                                    nname       : this.userProfile.nname,
                                    username    : this.userProfile.username,
                                    collection  : [
                                                    this.userProfile.collection[0],
                                                    this.userProfile.collection[1],
                                                    this.userProfile.collection[2],
                                                    this.userProfile.collection[3],
                                                    this.userProfile.collection[4],
                                                    this.userProfile.collection[5],
                                                ]
                                })
                                .then(response => {
                                    this.$swal({
                                        toast: true,
                                        position: 'bottom-end',
                                        icon: 'success',
                                        title: 'update success .',
                                        timerProgressBar: true,
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                })
                                .catch(error => {
                                    this.$swal({
                                        toast: true,
                                        position: 'bottom-end',
                                        icon: 'error',
                                        title: 'update false . please try again!!',
                                        timerProgressBar: true,
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                })   
                        }else{
                            this.$swal({
                                toast: true,
                                position: 'bottom-end',
                                icon: 'error',
                                title: 'password incorect',
                                timerProgressBar: true,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } 
                    }
                },
                allowOutsideClick: () => !this.$swal.isLoading()
            })
        }
    },

}
</script>