document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from being actually submitted
    alert("Form submitted");
});
