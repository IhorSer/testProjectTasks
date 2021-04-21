import { auth } from '../services/firebase';

export const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}

export const logout = () => {
    return auth.signOut();
}

export const register = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
}

export const initUser = (onAuth) => {
    return auth.onAuthStateChanged(onAuth);
}