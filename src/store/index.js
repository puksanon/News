import Vue from "vue";
import Vuex from "vuex";
import Axios from 'axios'
import VueAxios from 'vue-axios'
const fb = require('../firebase/firebaseInit')

Vue.use(Vuex);
Vue.use(VueAxios, Axios)

fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')

        fb.usersCollection.doc(user.uid).onSnapshot(doc => {
            store.commit('setUserProfile', doc.data())
        })
    }
})

export const store = new Vuex.Store({
    state:{
        currentUser: null,
        userProfile: {},
        Newsdata: [],
    },

    actions: {
        clearData({ commit }) {
            commit('setCurrentUser', null)
            location.reload();
        },
        
        async fetchUserProfile({ commit, state }) {
            await fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.error(err)
                commit('setCurrentUser', null)
                commit('setUserProfile', {})
            })
        },
    },

    mutations: {
        setCurrentUser(state, val) {
             state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        },
        addNewsdata(state,val){
            state.Newsdata = val
        }
    }
});