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

import { AuthErrorCodes } from 'firebase/auth';

export const textPhoneNumber = document.getElementById('user-phone-number');
export const textName = document.getElementById('user-name');
export const verifyButton = document.getElementById('verify-using-phone'); 
