import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import firebase from './firebase'   

const authProvider = async (type, params) => {
    const { username, password } = params;

    if (type === AUTH_LOGIN) {
      try {
        await firebase.auth().signInWithEmailAndPassword(username, password)
        return Promise.resolve()
      } catch(error) {
        console.log(error);
        return Promise.reject()
      }
    }

    // when a user tries to logout
    if (type === AUTH_LOGOUT) {
      try {
        await firebase.auth().signOut()
        return Promise.resolve()
      } catch(error) {
        console.log(error);
        return Promise.reject()
      }
    }

    // when the API throws an error
    if (type === AUTH_ERROR) {
     const { status } = params;
     if (status === 401 || status === 403) {
      try {
        await firebase.auth().signOut()
        return Promise.reject()
      } catch(error) {
        console.log(error);
        return Promise.reject()
      }
     }
     return Promise.resolve()
    }
    // when a user navigates to a new location
    if (type === AUTH_CHECK) {
      if (!firebase.auth().currentUser) {
        return Promise.reject();
      }else {
        firebase.auth().currentUser.getIdToken(true)
        return Promise.resolve()
      }
    }
    
    return Promise.reject('Unknown Method');
   }

export default authProvider