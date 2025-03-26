// Authentication related functions

// Initialize Firebase Authentication
const auth = firebase.auth();

// Function to toggle between sign-in and sign-up forms
function toggleAuthForm(mode) {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');
    const signInTab = document.getElementById('sign-in-tab');
    const signUpTab = document.getElementById('sign-up-tab');

    if (mode === 'signin') {
        signInForm.classList.remove('hidden');
        signUpForm.classList.add('hidden');
        signInTab.classList.add('active');
        signUpTab.classList.remove('active');
    } else {
        signInForm.classList.add('hidden');
        signUpForm.classList.remove('hidden');
        signInTab.classList.remove('active');
        signUpTab.classList.add('active');
    }
}

// Sign in function
function signIn(event) {
    event.preventDefault();
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User signed in:", userCredential.user);
            window.location.href = "/pages/home.html"; // Redirect after login
        })
        .catch((error) => {
            console.error("Sign-in error:", error.message);
            alert(error.message);
        });
}

// Sign up function
function signUp(event) {
    event.preventDefault();
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
            window.location.href = "/pages/home.html"; // Redirect after sign-up
        })
        .catch((error) => {
            console.error("Sign-up error:", error.message);
            alert(error.message);
        });
}

// Sign out function
function signOut() {
    auth.signOut().then(() => {
        console.log("User signed out");
        window.location.href = "/index.html"; // Redirect to home page
    }).catch((error) => {
        console.error("Sign-out error:", error.message);
        alert(error.message);
    });
}

// Event Listeners
document.getElementById('sign-in-form')?.addEventListener('submit', signIn);
document.getElementById('sign-up-form')?.addEventListener('submit', signUp);
document.getElementById('sign-out-btn')?.addEventListener('click', signOut);
