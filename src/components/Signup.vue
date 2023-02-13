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
                <button class="btn btn-primary mt-4 mx-auto btn-lg">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config';
export default {
    setup() {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let error = ref(null)

        let signUp = async() => {
            try {
                let res = await auth.createUserWithEmailAndPassword(email.value, password.value);
                if (!res) {
                    throw new Error("Cound not create user")
                }
                console.log(res.user)
            }
            catch (err) {
                err.value = err.message;
            }
        }
        return {displayName,email,password,signUp}
    }
}
</script>

<style>

</style>