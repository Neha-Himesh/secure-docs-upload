// import { loadComponents } from "./load-components.js";
// import { formAuthentication } from "./form-authentication.js";
// import { linkEmailPhonePostAuthentication } from "./link-email-phone-post-authentication.js";
// import { sendPhoneOTP } from "./phone-based-authentication.js";
// import { sendEmailLink } from "./email-based-authentication.js";
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
// import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';


// document.addEventListener("DOMContentLoaded", function () {
// 	const includes = [
// 		{ id: "login-page", file: "html-components/sign-in.html" },
// 		// { id: "home", file: "html-components/hero.html" },
// 		// { id: "projects", file: "html-components/projects.html" },
// 		// { id: "about", file: "html-components/about.html" },
// 		// { id: "contact", file: "html-components/contact-form.html" },
// 		// { id: "education-experience-internships", file: "html-components/education-experience-internships.html" },
// 		// { id: "skills", file: "html-components/skills.html" },
// 		// { id: "contact-details", file: "html-components/contact-details.html" },
// 	];  

// 	// Dynamically load components and then initialize scripts
// 	// loadComponents(includes, () => {
// 	// 	initializePageScripts();
//     loadComponents(includes, () => {
// 		initializePageScripts();
// 	});
// });

// const firebaseConfig = {
// 	apiKey: "AIzaSyDEbX-gQ6FwJD5oZGnaoiJu9qIaAG2LZ0M",
// 	authDomain: "upload-25f01.firebaseapp.com",
// 	projectId: "upload-25f01",
// 	storageBucket: "upload-25f01.firebasestorage.app",
// 	messagingSenderId: "97167487690",
// 	appId: "1:97167487690:web:88409aded0a1dd13f87a33",
// 	measurementId: "G-3Y94K1XCBK"
// };
// function initializePageScripts(){
// 	// Initialize Firebase
// 	firebase.initializeApp(firebaseConfig);

// 	// // Initialize Firebase Analytics (optional)
// 	// const analytics = firebase.analytics();

// 	const auth = getAuth(firebaseApp);

// 	onAuthStateChanged(auth, user => {
// 		if (user) {
// 		  console.log(`Logged in as ${user.email}`);
// 		} else {
// 		  console.log('No user');
// 		}
// 	  });
	  
// }
import './styles.css';
import {initializeApp} from 'firebase/app';
import { getAuth, connectAuthEmulator, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { textPhoneNumber, textName, verifyButton } from './ui';

const firebaseConfig = {
	apiKey: "AIzaSyDEbX-gQ6FwJD5oZGnaoiJu9qIaAG2LZ0M",
	authDomain: "upload-25f01.firebaseapp.com",
	projectId: "upload-25f01",
	storageBucket: "upload-25f01.firebasestorage.app",
	messagingSenderId: "97167487690",
	appId: "1:97167487690:web:88409aded0a1dd13f87a33",
	measurementId: "G-3Y94K1XCBK"
};

document.addEventListener('DOMContentLoaded', () =>{

	const firebaseApp = initializeApp(firebaseConfig);

	const auth = getAuth(firebaseApp);
	connectAuthEmulator(auth, "http://localhost:9099");
	// Disable app verification for testing
	auth.appVerificationDisabledForTesting = true;
	auth.languageCode = 'it';
	console.log(`Auth is : ${auth}`);
	var recaptchaContainer = document.getElementById('recaptcha-container');
	console.log(`recaptcha container is : ${recaptchaContainer}`);
	console.log(recaptchaContainer);
	window.recaptchaVerifier = new RecaptchaVerifier( recaptchaContainer, {
		'size': 'normal',
		'callback': (response) => {
		// reCAPTCHA solved, allow signInWithPhoneNumber.
		// ...
		alert('Please enter phone number');
		},
		'expired-callback': () => {
		// Response expired. Ask user to solve reCAPTCHA again.
		// ...
		alert('Capthcha expired. Please solve reCaptcha again');
		}
	});

	window.recaptchaVerifier.render().then(widgetId => {
		window.recaptchaWidgetId = widgetId;
	}, auth);


	window.recaptchaVerifier.render();

	const recaptchaDiv = document.getElementById("recaptcha-container");

	if (!recaptchaDiv) {
	  console.error("recaptcha-container div not found in DOM.");
	  return;
	}
	
	if (!verifyButton || !textPhoneNumber) {
		console.warn('DOM elements not found. Are they loaded yet?');
		return;
	}
	console.log("verifyButton", verifyButton); // Ensure it's not undefined

	console.log("Hello");

	// const signIn = async () => {
	// 	console.log("Hello");
	// 	const phoneNumber = textPhoneNumber.value;
	// 	const appVerifier = window.recaptchaVerifier;
	
	// 	try {
	// 	const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
	// 	console.log('SMS sent:', confirmationResult);
	// 	window.confirmationResult = confirmationResult;
	// 	} catch (error) {
	// 	console.error('Error during sign-in:', error);
	// 	}
	// };
	
	verifyButton.addEventListener('click',async (e) => {
		e.preventDefault(); // 🔥 This is crucial
		console.log("Button clicked");
	  
		const phoneNumber = textPhoneNumber.value;
		const appVerifier = window.recaptchaVerifier;
	  
		try {
		  const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
		  console.log('SMS sent:', confirmationResult);
		  window.confirmationResult = confirmationResult;
		} catch (error) {
		  console.error('Error during sign-in:', error);
		}
	});	
});

	// .then((confirmationResult) => {
	// 	window.confirmationResult = confirmationResult;
	// }).catch((error) => {
	// 	alert("Something went wrong. Please enter the details again");
	// })