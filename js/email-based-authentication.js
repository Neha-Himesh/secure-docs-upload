import { actionCodeSettings } from "./action-code-settings.js";

export function sendEmailLink(email) {
  
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          // Save the email locally for later use
          window.localStorage.setItem('emailForSignIn', email);
          alert('Sign-in link sent to your email.');
        })
        .catch((error) => {
          console.error('Error sending email link:', error);
        });
}
  