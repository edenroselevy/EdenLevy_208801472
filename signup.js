document.getElementById("profile").onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("signup-image").src = fr.result;
        };
        fr.readAsDataURL(files[0]);
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
};

function register() {
    // validation goes here
    event.preventDefault();
    if (validForm()) {
        window.location = "./dining.html";
    }
}

function validForm() {
    const usernameElem = document.querySelector("#username");
    const passwordElem = document.querySelector("#password");
    const emailElem = document.querySelector("#email");
    const ageElem = document.querySelector("#age");
    const phoneElem = document.querySelector("#phone");

    if (!usernameElem.value) {
        usernameElem.classList.add("invalid");
        alert("Username is required");
        return false;
    }
    usernameElem.classList.remove("invalid");

    if (!passwordElem.value) {
        passwordElem.classList.add("invalid");
        alert("Password is required");
        return false;
    }
    passwordElem.classList.remove("invalid");

    if (!emailElem.value) {
        emailElem.classList.add("invalid");
        alert("Email is required");
        return false;
    } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailElem.value)
    ) {
        emailElem.classList.add("invalid");
        alert("Email is invalid");
        return false;
    }
    emailElem.classList.remove("invalid");

    if (!ageElem.value) {
        ageElem.classList.add("invalid");
        alert("Age is required");
        return false;
    } else if (!/[0-9]|\./.test(ageElem.value)) {
        ageElem.classList.add("invalid");
        alert("Age is invalid");
        return false;
    } else if (ageElem.value < 1 || ageElem.value > 120) {
        ageElem.classList.add("invalid");
        alert("Age is invalid");
        return false;
    }
    ageElem.classList.remove("invalid");

    if (!phoneElem.value) {
        phoneElem.classList.add("invalid");
        alert("Phone is required");
        return false;
    } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(phoneElem.value)) {
        phoneElem.classList.add("invalid");
        alert("Phone is invalid");
        return false;
    }
    phoneElem.classList.remove("invalid");

    return true;
}
