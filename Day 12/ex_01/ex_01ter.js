function handleSubmit(event) {
    event.preventDefault();
    let firstNameInput = document.getElementById('firstname');
    let lastNameInput = document.getElementById('lastname');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let errorParagraph = document.getElementById('error');
    let md5password = calcMD5(passwordInput.value);
    const formData = {
        form: {
            firstname: firstNameInput.value,
            lastname: lastNameInput.value,
            email: emailInput.value,
            password: md5password
        }
    };
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

    fetch("http://localhost:3000/validateForm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
