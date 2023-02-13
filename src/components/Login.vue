<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
            <h2 class="text-center mt-4"> Login </h2>
            <form @submit.prevent="login" class="d-flex flex-column align-items-center m-3">
                <div class="w-100">
                    <input type="email" class="form-control" placeholder="example@gmail.com" v-model="email">
                    <input type="password" class="form-control my-4" placeholder="Password" v-model="password">
                </div>
                <button class=" btn btn-primary mx-auto btn-lg">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config';
export default {
    setup() {
        let email = ref("");
        let password = ref("");

        let login = async () => {
            let res = await auth.createUserWithEmailAndPassword(email.value, password.value);
            console.log(res.value)
        }
        return {email, password, login }
    }
}
</script>

<style>

</style>