<template>
  <div class="p-4">
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
import { timestamp, timeStamp } from '../firebase/config'
import useCollection from "../composables/useCollection"
export default {
    setup() {
        let message = ref("");
        let { user } = getUser();
        let { error, addDoc }= useCollection("messages");

        let handleSubmit = async() => {
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at:timestamp()
            }
            await addDoc(chat);

            message.value = "";

        }
        return {message,handleSubmit}
    }

}
</script>

<style>

</style>