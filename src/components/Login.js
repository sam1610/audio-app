// import React, { useState, useEffect } from 'react';
// import { Auth } from '@aws-amplify/ui-react';

// function LoginButton() {
//   const [authState, setAuthState] = useState(null);

//   useEffect(() => {
//     const listener = (user) => setAuthState(user);
//     Auth.currentAuthenticatedUser().then(listener);
//     Auth.onAuthStateChange(listener);
//     return () => Auth.off(listener);
//   }, []);

//   const handleAuthStateChange = async () => {
//     if (authState) {
//       try {
//         await Auth.signOut();
//         setAuthState(null);
//       } catch (error) {
//         console.error('Error signing out:', error);
//       }
//     } else {
//       try {
//         const user = await Auth.signIn({ connection: 'UsernamePassword' });
//         setAuthState(user);
//       } catch (error) {
//         console.error('Error signing in:', error);
//       }
//     }
//   };

//   return (
//     <>
//     <button onClick={handleAuthStateChange}>
//       {authState ? 'Sign Out' : 'Sign In'}
//     </button>
//     </>
//   );
// }

// export default LoginButton;
