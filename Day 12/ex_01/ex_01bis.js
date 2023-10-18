function handleSubmit(event) {
    event.preventDefault();
    let firstNameInput = document.getElementById('firstname');
    let lastNameInput = document.getElementById('lastname');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let errorParagraph = document.getElementById('error');
    errorParagraph.textContent = '';

    if (firstNameInput.value.trim() === '') {
        errorParagraph.textContent = 'First name must not be empty';
        return;
    }
    if (lastNameInput.value.trim() === '') {
        errorParagraph.textContent = 'Last name must not be empty';
        return;
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorParagraph.textContent = 'Email is badly formatted';
        return;
    }
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (
        passwordInput.value.length <= 7 ||
        !passwordRegex.test(passwordInput.value)
    ) {
        errorParagraph.textContent =
            'Password must be at least 8 characters long and contain at least a letter and a number';
        return;
    }

}
