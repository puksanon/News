<template>
    <div class="no-signin" v-if="username === '' ">
        <v-form>
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon style="font-size: 40px;" color="black" dark v-on="on">mdi-account-circle</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Sign in</span>
                    
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>

                        <v-col cols="12">
                            <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-col>
                        
                        
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <SignUp></SignUp>
                        
                        <v-spacer></v-spacer>
                        
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Sign in</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
        </v-form>    
    </div>
    <div v-else>
        <v-btn depressed color='white' height="50">
            <span style="margin-right: 10px;" color="black">{{ username }}</span>
            <v-avatar
                size="40px"
            >
                <img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                >
            </v-avatar>   
        </v-btn>   
    </div>
</template>

<script>
const SignUp = () => import("../Singin/SignUp");
export default {
    name: "Signin",
    components: { SignUp },
    data: () => ({
      dialog: false,
      username : ''
    }),
}
</script>