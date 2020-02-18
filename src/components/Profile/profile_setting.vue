<template>
    <div class="profile_setting">
        <Navbar></Navbar>
        <div class="main_content">
            <div class="pl_header">
                <v-parallax
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                ></v-parallax>
            </div>
            <div class="setting_content">
                    <v-card  flat color="transparent">
                        <v-list three-line subheader>
                        <v-subheader>User Controls</v-subheader>
                        <v-list-item>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-list-item-title>First Name</v-list-item-title>
                                <v-text-field label="First Name" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-list-item-title>Last Name</v-list-item-title>
                                <v-text-field label="Last Name" required></v-text-field>
                            </v-col> 
                            <v-col cols="12" sm="6" md="4">
                                <v-list-item-title>Nick Name</v-list-item-title>
                                <v-text-field label="Nick Name"  required></v-text-field>
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
                                <v-text-field label="Email" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-list-item-title>Phone</v-list-item-title>
                                <v-text-field label="Phone" required></v-text-field>
                            </v-col>  
                            </v-row>
                        </v-list-item>

                        <v-list-item>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>Username</v-list-item-title>
                                    <v-text-field label="Username" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>Password</v-list-item-title>
                                    <v-text-field label="Password" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-list-item-title>Confirm Password</v-list-item-title>
                                    <v-text-field label="Confirm Password"  type="password" required></v-text-field>
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
                                <v-checkbox v-model="q1"></v-checkbox>
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
                                <v-checkbox v-model="q2"></v-checkbox>
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
                                <v-checkbox v-model="q3"></v-checkbox>
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
                                <v-checkbox v-model="q4"></v-checkbox>
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
                                <v-checkbox v-model="q5"></v-checkbox>
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
                                <v-checkbox v-model="q6"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                <v-list-item-title>NATURE</v-list-item-title>
                                <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                        <div class="btn text-center" >
                            <v-btn color="danger mr-2" dark>Reset</v-btn>
                            <v-btn color="primary" dark>Confirm</v-btn>
                        </div>
                </v-list> 
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
const Navbar = () => import('@/components/Elements/Navbar');
export default {
    name: "profile_setting",
    components: {
        Navbar
    },
    data () {
      return {
        age: "",
        dialog: false,
        q1:true,
        q2:false,
        q3:true,
        q4:false,
        q5:true,
        q6:false,
        sound: true,
        widgets: false,
      }
    },

}
</script>