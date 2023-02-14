import { ref } from "vue";
import { auth } from "../firebase/config";

let error = ref(null);

let logoutSystem = async() => {
    try {
            await auth.signOut();
            console.log("Logout")
    
        }
        catch (err) {
            error.value = err.message;
        }
}

let useLogout = () => {
  return { error, logoutSystem };
};

export default useLogout;
