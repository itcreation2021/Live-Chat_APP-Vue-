<template>
  <div class="container m-5 bg-light w-75 shadow rounded-4 mx-auto">
   <Navbar></Navbar>
   <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar'
import { auth } from "../firebase/config"
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'
export default {
  components: {
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