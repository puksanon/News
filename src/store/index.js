import Vue from "vue";
import Vuex from "vuex";
const fb = require('../firebase/firebaseInit')

Vue.use(Vuex);

fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')
        // store.dispatch('filterNews')

        fb.usersCollection.doc(user.uid).onSnapshot(doc => {
            store.commit('setUserProfile', doc.data())
        })
    }
})

export const store = new Vuex.Store({
    state:{
        currentUser     : null,
        userProfile     : {},
        Newsdata        : [],
        filterNewsdata  : []
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


        // async filterNews({commit ,state}){
        //     let finishnew 

        //     if(state.userProfile.collections){
        //         if(state.userProfile.collections[0]){
        //             const changefilter = 'สังคม'
        //             const filternew = newstate.Newsdatas.filter(({ category }) => changefilter.includes(category));
        //             if(filternew.length !== 0){
        //                 finishnew.push(filternew)
        //             }
        //         }
        //         if(state.userProfile.collections[1]){
        //             const changefilter = 'การเมือง'
        //             const filternew = state.Newsdata.filter(({ category }) => changefilter.includes(category));
        //             if(filternew.length !== 0){
        //                 finishnew.push(filternew)
        //             }
        //         }
        //         if(state.userProfile.collections[2]){
        //             const changefilter = 'ต่างประเทศ'
        //             const  filternew = state.Newsdata.filter(({ category }) => changefilter.includes(category));
        //             if(filternew.length !== 0){
        //                 commit('setfilterNews', filternew)
        //             }
        //             console.log(filternew)
        //         }
        //         if(state.userProfile.collections[3]){
        //             const changefilter = 'อาชญากรรม'
        //             const filternew = state.Newsdata.filter(({ category }) => changefilter.includes(category));
        //             if(filternew.length !== 0){
        //                 finishnew.push(filternew)
        //             }
        //         }
        //         if(state.userProfile.collections[4]){
        //             const changefilter = 'ภูมิภาค'
        //             const filternew = state.Newsdata.filter(({ category }) => changefilter.includes(category));
        //             if(filternew.length !== 0){
        //                 finishnew.push(filternew)
        //             }
        //         }
        //         if(state.userProfile.collections[5]){
        //             const changefilter = 'กีฬา'
        //             const filternew = state.Newsdata.filter(({ category }) => changefilter.includes(category));
        //              if(filternew.length !== 0){
        //                 finishnew.push(filternew)
        //             }
        //         }
        //     }
        // },
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
        },
        setfilterNews(state,val){
            state.filterNewsdata = val
        }
    }
});