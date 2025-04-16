import { loadComponents } from "./load-components.js";
import { firebaseConfig } from "./firebase-init.js";
import { formAuthentication } from "./form-authentication.js";
import { linkEmailPhonePostAuthentication } from "./link-email-phone-post-authentication.js";
import { sendPhoneOTP } from "./phone-based-authentication.js";
import { sendEmailLink } from "./email-based-authentication.js";

document.addEventListener("DOMContentLoaded", function () {
	const includes = [
		{ id: "login-page", file: "html-components/sign-in.html" },
		// { id: "home", file: "html-components/hero.html" },
		// { id: "projects", file: "html-components/projects.html" },
		// { id: "about", file: "html-components/about.html" },
		// { id: "contact", file: "html-components/contact-form.html" },
		// { id: "education-experience-internships", file: "html-components/education-experience-internships.html" },
		// { id: "skills", file: "html-components/skills.html" },
		// { id: "contact-details", file: "html-components/contact-details.html" },
	];  

	// Dynamically load components and then initialize scripts
	// loadComponents(includes, () => {
	// 	initializePageScripts();
    loadComponents(includes, () => {
		initializePageScripts();
	});
});

function initializePageScripts(){
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	// Initialize Firebase Analytics (optional)
	const analytics = firebase.analytics();
}