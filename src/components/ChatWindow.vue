<template>
    <div class="chat-window p-3">
        <div class="message" v-for="message in messages" :key="message.id">
            <div class="single-message p-3">
                <span class="created-at text-black-50">{{ message.created_at.toDate() }}</span>
                <div class="">
                    <span class="name fw-bolder"> {{ message.name }}</span>
                    <span class="message px-2"> {{ message.message }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {db} from "../firebase/config"
export default {
    setup() {

        let messages = ref([])

        db.collection("messages").orderBy("created_at").onSnapshot((snap) => {
            let results = [];
            snap.docs.forEach((doc) => {
                let document = { ...doc.data(), id: doc.id }
                // if (doc.data().created_at) {
                //     results.push(document)
                // }

                doc.data().created_at && results.push(document);

                messages.value = results;
            })
        })


        return {messages}
    }

}
</script>

<style>

</style>