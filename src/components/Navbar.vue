<template>
  <nav class="d-flex justify-content-between p-4">
    <div class="">
        <p class="fw-bolder mb-0">Hi Display name </p>
        <p class="text-black-50">Logged in as email </p>
    </div>
    <div class="">
        <button class="btn btn-primary rounded-5 fw-bolder py-2 px-3" @click="logOut">Logout</button>
    </div>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity';
import useLogout from "../composables/useLogout"

export default {
    setup() {

        let { error, logoutSystem }= useLogout();

        let logOut = async() => {
            await logoutSystem();
        }

        return {logOut,error}
    }
}
</script>

<style>

</style>