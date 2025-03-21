
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";

// Sign Up User
export const signUpUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw error.message;
  }
};

// Sign In User
export const signInUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw error.message;
  }
};

// Sign Out User
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error: any) {
    throw error.message;
  }
};
