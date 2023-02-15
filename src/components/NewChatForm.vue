<template>
  <div class="p-3">
    <textarea 
        class="form-control text-message" rows="2"
        placeholder="text message and hit enter to message"
        v-model="message"
        @keypress.enter="handleSubmit"
    ></textarea>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import { timestamp, timeStamp } from '../firebase/config';
export default {
    setup() {
        let message = ref("");
        let { user } = getUser();

        let handleSubmit = () => {
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at:timestamp()
            }
            message.value = "";
            console.log(chat);
        }
        return {message,handleSubmit}
    }

}
</script>

<style>
.text-message:focus{
    outline: none;
}
</style>