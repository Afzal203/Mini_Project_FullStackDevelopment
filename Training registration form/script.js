const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const language = document.getElementById("language").value;
    const mode = document.getElementById("mode").value;
    const level = document.getElementById("level").value;

    if (name === "" || age === "" || email === "" || phone === "" ||
        language === "" || mode === "" || level === "") {

        alert("Please fill all the fields");

    } else {

        const training = {
            name: name,
            age: age,
            email: email,
            phone: phone,
            language: language,
            mode: mode,
            level: level
        };

        fetch("http://localhost:8080/registrations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(training)
        })
        .then(response => response.json())
        .then(data => {
            alert("Registration Successful!");
            form.reset();
        })
        .catch(error => {
            console.error(error);
            alert("Registration Failed!");
        });
    }
});
