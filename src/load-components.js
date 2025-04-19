import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export function loadComponents(includes, onComplete){
    var loadedCount = 0;
    includes.forEach(include =>{
        fetch(include.file)
        .then(response => response.text())
        .then(data =>{
            const element = document.getElementById(include.id);
            if(element){
                element.innerHTML = data;
            } else {
                console.warn(`Element with ID '${include.id} not found.`);
            }
        })
        .catch(err => console.error(`Error loading ${include.file}:`, err))
        .finally(()=>{
            loadedCount ++;
            if(loadedCount === includes.length){
                // onComplete();
                console.log("Loaded all components");
            }
        })
    });
}

// document.addEventListener("DOMContentLoaded", function () {
//     const auth = getAuth();

//     // Check if this is an email sign-in link
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//         let email = window.localStorage.getItem('emailForSignIn');
        
//         if (!email) {
//             // If email isn't found, ask the user to enter it manually
//             email = window.prompt('Please provide your email for confirmation');
//         }

//         signInWithEmailLink(auth, email, window.location.href)
//             .then(result => {
//                 console.log('User signed in', result.user);
//                 window.localStorage.removeItem('emailForSignIn');
//                 alert("Email verified successfully!");
//             })
//             .catch(error => {
//                 console.error('Error signing in with email link', error);
//             });
//     }
// });
