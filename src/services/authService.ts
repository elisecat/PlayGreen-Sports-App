
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import firebase_app from "../configFirebase";

const auth = getAuth(firebase_app);

export const LoginUser = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return true;
    } catch (error) {
      console.error("Error in user login: ", error);
      return false;
    }
};

export const registerUser = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.error("Error in user registration: ", error);
    }
};

export const signOutUser = async () => {
  try {
      await signOut(auth);
      return true;
  } catch (error) {
      console.error("Error signing out: ", error);
      return false;
  }
};