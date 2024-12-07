```javascript
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const auth = getAuth();

let unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('User is signed in:', uid);
  } else {
    // User is signed out
    console.log('User is signed out');
    // Handle potential errors or network issues here
  }
}, (error) => {
  console.error('Error during authentication state change:', error);
  // Implement appropriate error handling or fallback logic 
});

// Unsubscribe from listener when no longer needed 
//unsubscribe();
```