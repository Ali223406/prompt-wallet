import { firebaseApp } from './firebaseinit';
import { getAuth, 
         createUserWithEmailAndPassword,
         GoogleAuthProvider,
         signInWithEmailAndPassword,
         signInWithPopup
        } from 'firebase/auth';
import { showMessage, initUserSession } from './util';

const auth = getAuth(firebaseApp);