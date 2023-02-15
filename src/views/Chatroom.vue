<template>
  <div class="container m-5 bg-light w-75 shadow rounded-4 mx-auto">
   <Navbar></Navbar>
   <ChatWindow></ChatWindow>
   <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar'
import { auth } from "../firebase/config"
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'
export default {
  components: {
    ChatWindow,
    NewChatForm, Navbar },

  setup() {
    let { user } = getUser();
    let router = useRouter();
    watch(user,() => {
      if (!user.value) {
        router.push('/')
      }
    })
  }

}
</script>

<style>

</style>