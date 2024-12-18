// Load Header and Footer
document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(err => console.error("Error loading header:", err));

    // Load Footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(err => console.error("Error loading footer:", err));
});
