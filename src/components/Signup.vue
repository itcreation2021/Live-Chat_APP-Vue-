<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
            <h2 class="text-center mt-4">Sign Up</h2>
            <form @submit.prevent="signUp" class="d-flex flex-column align-items-center m-3">
                <div class="w-100">
                    <input type="text" class="form-control" placeholder="Display Name" v-model="displayName">
                    <input type="email" class="form-control my-4" placeholder="example@gmail.com" v-model="email">
                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <div v-if="error" class="mt-2 text-danger fw-bolder">{{ error }}</div>
                <button class="btn btn-primary mt-3 mx-auto btn-lg">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup';

export default {
    setup() {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let { error, createAccount } = useSignup();


        let signUp = async() => {
            let res = await createAccount(email.value, password.value, displayName.value)
            if (res) {
                console.log(res.user)
            }
        }

        return {displayName,email,password,signUp,error}
    }
}
</script>

<style>

</style>