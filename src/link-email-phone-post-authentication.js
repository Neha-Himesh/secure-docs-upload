export function linkEmailPhonePostAuthentication(){

    // Ensure Firebase Auth is initialized
    const auth = firebase.auth();
    // After signing in with one method
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
    firebase.auth().currentUser.linkWithCredential(credential)
        .then((usercred) => {
        // Accounts successfully linked.
        const user = usercred.user;
        })
        .catch((error) => {
        console.error('Error linking credentials:', error);
        });

}