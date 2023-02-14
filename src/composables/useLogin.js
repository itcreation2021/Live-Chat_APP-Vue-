import { ref } from "vue";
import { auth } from "../firebase/config";


let error = ref(null);

let signIn = async(email,password) => {
    try {
            let res = await auth.signInWithEmailAndPassword(email, password);
            if (!res) {
                throw new Error("Could not Login")
            }
        return res;
        }
    catch (err) {
        error.value = err.message;
    }
}

let useLogin = () => {
    
    return {error, signIn}
}

export default useLogin;