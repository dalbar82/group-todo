<template>
  <div class="signup-form">
    <h2>Sign Up</h2>
    <div class="form-group">
      <input 
        type="text"
        v-model="email"
        placeholder="email"
        id="email"
      />
        <input 
        type="password"
        placeholder="password"
        v-model="password"
        id="password"
      /> 
      <button class="btn" @click="signUp()">Go</button>
      <router-link class="existing-user" to="/signin">Already a user? Sign in here</router-link>
      <p v-if="error.message" class="error-message">{{error.message}}</p>
    </div>
    
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default {
    name: 'SignUp',
    data() {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
        signUp() {
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    this.$router.push('/dashboard')
                })
                .catch((error) => {
                    this.error = error
            });
        }   
    }
}
</script>

<style scoped>
  .signup-form {
    background: rgb(255, 255, 255);
    width: 40%;
    height: 400px;
    margin: 100px auto;
    border-radius: 5px;
    font-weight: lighter;
  }
  .signup-form h2 {
    color: rgb(50, 50, 50);
    padding: 25px;
    font-weight: lighter;
  }
  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-group input {
    height: 50px;
    border-radius: 2px;
    border: 1px solid rgb(233, 233, 233);
    width: 80%;
    padding-left: 15px;
    margin-top: 25px;
    box-sizing: border-box;
  }
  .btn {
    height: 50px;
    border-radius: 2px;
    margin-top: 25px;
    width: 80%;
    border: none;
    background: rgb(0, 116, 151);
    color: white;
    cursor: pointer;
  }
  .error-message {
    background: rgb(248 105 92 / 96%);
    width: 80%;
    border-radius: 2px;
    margin-top: 25px;
    padding: 15px;
    box-sizing: border-box;
    color: white;
  }
  .existing-user{
    text-decoration: none;
    color: #4b87c6;
    margin-top: 25px;
  }
</style>
