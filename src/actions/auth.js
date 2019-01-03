import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider
} from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const startLogin = () => {
  return () => {
    // return firebase.auth().signInWithPopup(googleAuthProvider);
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};

export const testLoginEmailPassword = user => {
  return () => {
    console.log(user);
    return firebase.auth().signInWithEmailAndPassword(user.userName, user.pass);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
