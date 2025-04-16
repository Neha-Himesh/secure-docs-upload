export function formAuthentication(){
    // auth_email_link_send.js
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        // Determine which button was clicked
        const authMethod = e.submitter.value;
        if (authMethod === 'email') {
            const email = document.getElementById('user-email').value;
            // Proceed with email link authentication
            sendEmailLink(email);
        } else if (authMethod === 'phone') {
            const phoneNumber = document.getElementById('user-phone').value;
            // Proceed with phone number OTP authentication
            sendPhoneOTP(phoneNumber);
        }  
    });
}

  

