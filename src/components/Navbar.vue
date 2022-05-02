<template>
  <div>
    <div v-if="!isUser" id="nav">
      <div class="navbar-right">
      </div> 
      <div class="navbar-left">
        <router-link class="nav-link" to="/signin">Login</router-link>
      </div>
    </div>
    <div v-else id="nav" :class="active">
      <div class="navbar-right" >
        <router-link class="home" @click.native="makeActive('home')" to="/" >Home</router-link>
        <router-link class="dashboard" to="/dashboard" @click.native="makeActive('dashboard')">Dashboard</router-link>
      </div>  
      <div class="navbar-left">
        <router-link class="nav-link" to="/signin" @click.native="signUserOut">Logout</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default {
  name: 'Navbar',
  data () {
    return{
      active: 'home',
      isUser: false
    } 
	},
  methods: {
		makeActive(item){
			this.active = item;
    },
    signUserOut() {
        this.$store.dispatch('signOut');
        signOut(auth)
          .then(()=> {
            this.isUser = false
        }).catch((error) => {
          return error
        })
      }
  },
  created() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isUser = true
        } else {
          this.isUser = false
        }
      });
    },
    mounted() {
      const urlPath = this.$route.path;
      const route = urlPath.substring(1)
      this.makeActive(route)
    }
}
</script>

<style scoped>

#nav{
	display:inline-flex;
	width: 100%;
  height: 50px;
	background-color:#ffffff;
	border-radius:2px;

}
.navbar-left{
  position: absolute;
  right: 10px;
}

#nav a{
	display:inline-block;
	padding: 18px 30px;
	color:rgb(50, 50, 50);
	font-size:14px;
	text-decoration:none;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;

	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
}

#nav.home .home,
#nav.dashboard .dashboard{
	background-color:#3a8fb0;
  color: white;
}
</style>