<template>
    <div class="no-signin" v-if="!currentUser">
        <div class="nav_navi">
            <v-card class="overflow-hidden">
                <v-app-bar
                    fixed
                    flat
                    color="#82b1ff"
                    style="border-radius: 0;"
                    height="80"
                >
                    <v-avatar size="45px" style="margin-right: 20px;">
                    <img
                        src="../../../public/images/NEWs.png"
                        color="transparent"
                        alt="news"
                    >
                    </v-avatar>
                     <h2 style="margin-right: 10px; font-weight:bolder;color: #ffffff;" >NEWS</h2>
                    <v-spacer></v-spacer>
                    <v-form>
                        <v-row justify="center">

                            <!-- sign in card comp -->
                            <v-dialog v-model="dialog" persistent max-width="600px">
                                <template v-slot:activator="{ on }">                                   
                                    <v-btn icon>
                                        
                                        <v-icon style="font-size: 40px;" color="#fff" dark v-on="on">mdi-account-circle</v-icon>
                                    </v-btn>
                                </template>
                                <v-form ref="signin_form" v-model="signin_form" >
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">Sign in</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field 
                                                        color="purple darken-3"
                                                        v-model="email"
                                                        label="email"
                                                        :rules="emailRules" 
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        color="purple darken-3"
                                                        v-model="password"
                                                        label="Password" 
                                                        type="password" 
                                                        counter="15"
                                                        :rules="passwordRules"
                                                        required
                                                    ></v-text-field>
                                                </v-col>       
                                            </v-row>
                                        </v-container>
                                        <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                            <!-- sign up comp -->
                                            <SignUp></SignUp>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                            <v-btn color="blue darken-1" text :disabled="!signin_form"  @click="SignIn()">Sign in</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-form>
                            </v-dialog>
                        </v-row>
                    </v-form>    
                </v-app-bar>
            </v-card>
        </div>
    </div>
    <div class="admin_navbar" v-else-if="currentUser">
        <div class="nav_navi">
            <v-card class="overflow-hidden">
                <v-app-bar
                    fixed
                    flat
                    color="#82b1ff"
                    style="border-radius: 0;"
                    height="80"
                >
                    <v-app-bar-nav-icon  class="hidden-md-and-up" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
                    <v-avatar size="45px" >
                        <img
                            src="../../../public/images/NEWs.png"
                            color="transparent"
                            alt="news-logo"
                        >
                    </v-avatar>

                    <div class="navbar_manu hidden-sm-and-down text-uppercase ">
                        
                        <v-btn class="mr-5 ml-5" text height="40" to="/">
                            <span class="font-weight-black fz-20">Home</span>  
                        </v-btn>

                        <v-btn class="mr-5" text height="40" to="/dashboard">
                            <span class="font-weight-black fz-20">Dashboard</span>  
                        </v-btn>    

                        <v-menu
                            open-on-hover
                            transition="slide-x-transition"
                            bottom
                            right
                            offset-y
                        >
                            <template v-slot:activator="{ on }">
                                <v-btn class="mr-5" text  height="40" v-on="on">
                                    <span class="font-weight-black fz-20">Manage</span>  
                                </v-btn>  
                            </template> 
                            <v-list shaped>
                            <v-list-item-group color="primary">
                                <v-list-item v-for="(item , i) in manage" :key="i" :to="item.link">
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>       
                            </v-list>
                        </v-menu>  
                    </div>
                          
                    <v-spacer></v-spacer>
                    <v-card color="transparent" flat>
                        <v-row>
                            <v-text-field
                            max-width="90px"
                            append-icon="mic"
                            class="mx-7 mx-w hidden-xs-only" 
                            flat
                            hide-details
                            label="Search"
                            prepend-inner-icon="search"
                            solo-inverted
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-menu
                            open-on-hover
                            transition="slide-x-transition"
                            bottom
                            right
                            offset-y
                        >
                            <template v-slot:activator="{ on }">
                                <v-btn depressed color='transparent' height="50" v-on="on">
                                    <span style="margin-right: 10px; font-weight:bolder;color: #ffffff;" >{{ userProfile.username }}</span>
                                    <v-avatar
                                        size="40px"
                                    >
                                        <img
                                        alt="Avatar"
                                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                        >
                                    </v-avatar>   
                                </v-btn>  
                            </template> 
                            <v-list shaped>
                                <v-list-item-group color="primary">
                                    <v-list-item to="/profile_setting">
                                        <v-list-item-title>Profile Setting</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="Signout()">
                                        <v-list-item-title>Sign out</v-list-item-title>
                                    </v-list-item>
                                </v-list-item-group>    
                            </v-list>
                        </v-menu>  
                        </v-row>
                        
                    </v-card>
                </v-app-bar>
            </v-card>

            <v-navigation-drawer class="hidden-md-and-up" v-model="sidebar" app>
                <v-list shaped>
                    <v-subheader>MENU</v-subheader>
                    <v-text-field
                        class="mx-2 mb-2" 
                        flat
                        hide-details
                        label="Search"
                        prepend-inner-icon="search"
                        solo-inverted
                    ></v-text-field>

                    <v-list-item-group color="primary">
                        <v-list-item to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>

                        <v-list-item to="/dashboard">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>    

                    <v-list-group
                        v-if="userProfile.permission === 'admin'"
                        prepend-icon="account_circle"
                        value="true"
                    >

                        <template v-slot:activator>
                            <v-list-item-title>MANAGE</v-list-item-title>
                        </template>
                        
                            <v-list-item-group color="primary">
                                <v-list-item v-for="(item , i) in manage" :key="i" :to="item.link">
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>    
                    </v-list-group>        
                </v-list>
            </v-navigation-drawer>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { auth } from '../../firebase/firebaseInit'
const SignUp = () => import("@/components/Singin/SignUp");
export default {
    name: "Signin",
    components: { SignUp },
    data: () => ({
        dialog: false,
        email       : '',
        password    : '',
        signin_form : true,
        emailRules: [
            email => !!email || 'E-mail is required',
            email => /.+@.+\..+/.test(email) || 'E-mail must be valid',
        ],
        passwordRules: [
            password => !!password || 'Password is required',
            password => (password && password.length >= 6) || 'Password must be more than 6 characters',
            password => (password && password.length <= 15) || 'Password must be less than 15 characters',
        ],
        colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
            ], 
            manage:[
                { title: "Manage News" , link: "/manage_news" , icon: "mdi-web"},
            ],
            sidebar: false,
    }),

    computed: {
        ...mapState(['userProfile','currentUser'])
    },

    methods:{
        Signout: function(){
            this.username = ""
        },

        addItem: function(item){
            this.$emit("send_collection", item);
        },

        SignIn(){
             auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
                    this.$store.commit('setCurrentUser', user)
                    this.$store.dispatch('fetchUserProfile')
                    location.reload();
                }).catch(err => {
                    this.$swal({
                        toast: true,
                        position: 'bottom-end',
                        icon: 'error',
                        title: err.message,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        timer: 3000
                    });
                    this.performingRequest = false
                })
        },

        Signout(){
            auth.signOut().then(() => {
                    this.$store.dispatch('clearData')
            }).catch(err => {
                    console.log(err)
            })
        },
    }
}
</script>

<style  scoped>
.mx-w{
    max-width: 200px;
}

.fz-20{
    font-size: 14px;
    color: white;
}
</style>