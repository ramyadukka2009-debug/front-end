/* =========================================================
   NOVAWEB - SHARED JAVASCRIPT
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeMobileMenu();

    initializePasswordToggles();

    initializeLoginForm();

    initializeSignupForm();

    initializeCurrentYear();

});


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    if (!menuToggle || !navMenu) {
        return;
    }


    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    // Close menu after clicking a link
    const navLinks =
        navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


/* =========================================================
   PASSWORD SHOW / HIDE
========================================================= */

function initializePasswordToggles() {

    const toggleButtons =
        document.querySelectorAll(".password-toggle");


    toggleButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const targetId =
                button.getAttribute("data-target");

            const passwordInput =
                document.getElementById(targetId);


            if (!passwordInput) {
                return;
            }


            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                button.textContent = "Hide";

            } else {

                passwordInput.type = "password";

                button.textContent = "Show";

            }

        });

    });

}


/* =========================================================
   LOGIN FORM
========================================================= */

function initializeLoginForm() {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }


    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();


        clearLoginErrors();


        const email =
            document.getElementById("loginEmail");

        const password =
            document.getElementById("loginPassword");


        const emailValue =
            email.value.trim();

        const passwordValue =
            password.value;


        let isValid = true;


        /* Email validation */

        if (emailValue === "") {

            showFieldError(
                email,
                "loginEmailError",
                "Email address is required."
            );

            isValid = false;

        } else if (!isValidEmail(emailValue)) {

            showFieldError(
                email,
                "loginEmailError",
                "Please enter a valid email address."
            );

            isValid = false;

        }


        /* Password validation */

        if (passwordValue === "") {

            showFieldError(
                password,
                "loginPasswordError",
                "Password is required."
            );

            isValid = false;

        } else if (passwordValue.length < 8) {

            showFieldError(
                password,
                "loginPasswordError",
                "Password must contain at least 8 characters."
            );

            isValid = false;

        }


        if (!isValid) {
            return;
        }


        /*
         * Frontend demonstration only.
         *
         * A real application should send these
         * credentials to a backend API.
         */

        showFormMessage(
            "loginMessage",
            "success",
            "Login validation successful! Backend authentication can be connected here."
        );

    });

}


/* =========================================================
   SIGNUP FORM
========================================================= */

function initializeSignupForm() {

    const signupForm =
        document.getElementById("signupForm");

    if (!signupForm) {
        return;
    }


    signupForm.addEventListener("submit", (event) => {

        event.preventDefault();


        clearSignupErrors();


        const name =
            document.getElementById("signupName");

        const email =
            document.getElementById("signupEmail");

        const password =
            document.getElementById("signupPassword");

        const confirmPassword =
            document.getElementById("confirmPassword");

        const terms =
            document.getElementById("terms");


        const nameValue =
            name.value.trim();

        const emailValue =
            email.value.trim();

        const passwordValue =
            password.value;

        const confirmPasswordValue =
            confirmPassword.value;


        let isValid = true;


        /* Full name */

        if (nameValue === "") {

            showFieldError(
                name,
                "signupNameError",
                "Full name is required."
            );

            isValid = false;

        } else if (nameValue.length < 2) {

            showFieldError(
                name,
                "signupNameError",
                "Please enter a valid name."
            );

            isValid = false;

        }


        /* Email */

        if (emailValue === "") {

            showFieldError(
                email,
                "signupEmailError",
                "Email address is required."
            );

            isValid = false;

        } else if (!isValidEmail(emailValue)) {

            showFieldError(
                email,
                "signupEmailError",
                "Please enter a valid email address."
            );

            isValid = false;

        }


        /* Password */

        if (passwordValue === "") {

            showFieldError(
                password,
                "signupPasswordError",
                "Password is required."
            );

            isValid = false;

        } else if (passwordValue.length < 8) {

            showFieldError(
                password,
                "signupPasswordError",
                "Password must contain at least 8 characters."
            );

            isValid = false;

        }


        /* Confirm password */

        if (confirmPasswordValue === "") {

            showFieldError(
                confirmPassword,
                "confirmPasswordError",
                "Please confirm your password."
            );

            isValid = false;

        } else if (
            passwordValue !== confirmPasswordValue
        ) {

            showFieldError(
                confirmPassword,
                "confirmPasswordError",
                "Passwords do not match."
            );

            isValid = false;

        }


        /* Terms */

        if (!terms.checked) {

            const termsError =
                document.getElementById("termsError");

            termsError.textContent =
                "You must accept the terms and conditions.";

            isValid = false;

        }


        if (!isValid) {
            return;
        }


        /*
         * Frontend demonstration only.
         *
         * A real application should send
         * registration data to a backend API.
         */

        showFormMessage(
            "signupMessage",
            "success",
            "Account validation successful! Backend registration can be connected here."
        );


        signupForm.reset();

    });

}


/* =========================================================
   EMAIL VALIDATION
========================================================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================================================
   FIELD ERROR
========================================================= */

function showFieldError(
    input,
    errorElementId,
    message
) {

    input.classList.add("input-error");


    const errorElement =
        document.getElementById(errorElementId);


    if (errorElement) {

        errorElement.textContent =
            message;

    }

}


/* =========================================================
   CLEAR LOGIN ERRORS
========================================================= */

function clearLoginErrors() {

    const email =
        document.getElementById("loginEmail");

    const password =
        document.getElementById("loginPassword");

    const emailError =
        document.getElementById("loginEmailError");

    const passwordError =
        document.getElementById("loginPasswordError");

    const message =
        document.getElementById("loginMessage");


    if (email) {
        email.classList.remove("input-error");
    }

    if (password) {
        password.classList.remove("input-error");
    }

    if (emailError) {
        emailError.textContent = "";
    }

    if (passwordError) {
        passwordError.textContent = "";
    }

    if (message) {
        message.className = "form-message";
        message.textContent = "";
    }

}


/* =========================================================
   CLEAR SIGNUP ERRORS
========================================================= */

function clearSignupErrors() {

    const fields = [

        "signupName",
        "signupEmail",
        "signupPassword",
        "confirmPassword"

    ];


    fields.forEach((id) => {

        const input =
            document.getElementById(id);

        if (input) {
            input.classList.remove("input-error");
        }

    });


    const errors = [

        "signupNameError",
        "signupEmailError",
        "signupPasswordError",
        "confirmPasswordError",
        "termsError"

    ];


    errors.forEach((id) => {

        const error =
            document.getElementById(id);

        if (error) {
            error.textContent = "";
        }

    });


    const message =
        document.getElementById("signupMessage");


    if (message) {

        message.className = "form-message";

        message.textContent = "";

    }

}


/* =========================================================
   FORM MESSAGE
========================================================= */

function showFormMessage(
    elementId,
    type,
    message
) {

    const element =
        document.getElementById(elementId);


    if (!element) {
        return;
    }


    element.className =
        `form-message ${type}`;


    element.textContent =
        message;

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function initializeCurrentYear() {

    const yearElement =
        document.getElementById("currentYear");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

}