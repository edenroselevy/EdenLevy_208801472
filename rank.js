function mySubmitFunction(e) {
    e.preventDefault();
    if (validForm()) {
        window.location = "thanku.html";
    }
    return false;
}

function validForm() {
    const usernameElem = document.querySelector("#username");
    const locationElem = document.querySelector("#location");
    const nameElem = document.querySelector("#name");
    const rateElem = document.querySelector("#rate");
    const reviewElem = document.querySelector("#review");

    if (!usernameElem.value) {
        usernameElem.classList.add("invalid");
        alert("Username is required");
        return false;
    }
    usernameElem.classList.remove("invalid");

    if (!locationElem.value) {
        locationElem.classList.add("invalid");
        alert("Location is required");
        return false;
    }
    locationElem.classList.remove("invalid");

    if (!nameElem.value) {
        nameElem.classList.add("invalid");
        alert("Bussiness name is required");
        return false;
    }
    nameElem.classList.remove("invalid");

    if (!rateElem.value) {
        rateElem.classList.add("invalid");
        alert("You must rate your experience");
        return false;
    }
    rateElem.classList.remove("invalid");

    if (!reviewElem.value) {
        reviewElem.classList.add("invalid");
        alert("Review is required");
        return false;
    }
    reviewElem.classList.remove("invalid");

    return true;
}
