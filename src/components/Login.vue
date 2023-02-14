<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
            <h2 class="text-center mt-4"> Login </h2>
            <form @submit.prevent="login" class="d-flex flex-column align-items-center m-3">
                <div class="w-100">
                    <input type="email" class="form-control" placeholder="example@gmail.com" v-model="email">
                    <input type="password" class="form-control my-4" placeholder="Password" v-model="password">
                </div>
                <div v-if="error" class="mt-2 text-danger fw-bolder">{{ error }}</div>
                <button class=" btn btn-primary mx-auto btn-lg">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin';

export default {
    setup() {
        let email = ref("");
        let password = ref("");

        let { error, signIn } = useLogin();

        let login = async () => {
            let res = await signIn(email.value, password.value)
            if (res) {
                console.log(res.user)
            }
        }
        return {email, password, login,error }
    }
}
</script>

<style>

</style>