<template>
  <div class="welcome justify-content-center rounded-4 mt-5 shadow bg-light w-75 m-auto">
    <div v-if="showLoginForm">
      <Login></Login>
      <p class="text-center pb-3">Not a member? <span @click="showLoginForm = !showLoginForm">Creat Accout!</span></p>
    </div>  
    <div v-else>
      <Signup></Signup>
      <p class="text-center pb-3">Already member? <span @click="showLoginForm = !showLoginForm">Login Form!</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import Signup from '../components/Signup'
export default {
  components: {
    Login, Signup
  },
  setup() {
    let showLoginForm = ref(true)


    return {showLoginForm}
    }

}
</script>

<style>
.welcome span{
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: blue;
}
</style>