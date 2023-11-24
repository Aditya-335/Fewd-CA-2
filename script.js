document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the input fields
        const username = document.getElementById('name').value;
        const nickname = document.getElementById('nick').value;

        // Store the values in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('nickname', nickname);

        localStorage.getItem("username");
        localStorage.getItem("nickname");
        

        // Redirect to the instruction page (or perform any other action)
        window.location.href = '/instruction.html';
    });
});
