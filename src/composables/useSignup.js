import { ref } from "vue";
import { auth } from "../firebase/config";

let error = ref(null);

let createAccount = async(email,password,displayName) => {
    try {
            let res = await auth.createUserWithEmailAndPassword(email, password);
            if (!res) {
                throw new Error("Cound not create user")
            }
            res.user.updateProfile({ displayName })
        return res;
        }
    catch (err) {
        err.value = err.message;
    }
}

let useSignup = () => {
  return {error,createAccount};
};

export default useSignup;
