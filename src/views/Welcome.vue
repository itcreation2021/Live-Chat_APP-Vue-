<template>
  <div class="welcome justify-content-center rounded-4 mt-5 shadow bg-light w-75 m-auto">
    <div v-if="showLoginForm">
      <Login @enterChatroom="enterChatroom"></Login>
      <p class="text-center pb-3">Not a member? <span @click="showLoginForm = !showLoginForm">Creat Accout!</span></p>
    </div>  
    <div v-else>
      <Signup @enterChatroom="enterChatroom"></Signup>
      <p class="text-center pb-3">Already member? <span @click="showLoginForm = !showLoginForm">Login Form!</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useRouter } from 'vue-router'

export default {
  components: {
    Login, Signup
  },
  setup() {
    let showLoginForm = ref(true);
    let router = useRouter();

    let enterChatroom = () => {
      router.push({name:'Chatroom'})
    }

    return {showLoginForm,enterChatroom}
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