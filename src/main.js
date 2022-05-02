import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {firebaseApp} from './firebaseApp.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.config.productionTip = false

const auth = getAuth(firebaseApp);


onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch('signIn', user)
      .then(() => {
        router.push('/dashboard').catch((error) => {
          return error;
        });
      })
      .catch(err => { 
        return err 
      })
  } else {
    router.push('/signin').catch((error) => {
      return error;
    });
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
