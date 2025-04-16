export function sendPhoneOTP(phoneNumber) {
    // Set up reCAPTCHA verifier
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible'
    });
  
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // Prompt user to enter the OTP
          const otp = window.prompt('Enter the OTP sent to your phone:');
          return confirmationResult.confirm(otp);
        })
        .then((result) => {
          // User signed in successfully.
          alert('Phone authentication successful.');
        })
        .catch((error) => {
          console.error('Error during phone authentication:', error);
        });
  }
  