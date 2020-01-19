<template>
  <v-row style="padding-left: 25px;">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Sign UP</v-btn>
      </template>
      <v-card>
        <v-form>
            <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Sign Up</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark text @click="dialog = false">Sign Up</v-btn>
            </v-toolbar-items>
            </v-toolbar>
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
                            <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-list-item>
                            <v-list-item-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-list-item>
                            <v-list-item-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-list-item>
                            <v-list-item-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content> 
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-list-item>
                            <v-list-item-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-list-item>
                            <v-list-item-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-list>
        </v-form>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
        name: "SignUp"
      return {
        age: "",
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
  }
</script>