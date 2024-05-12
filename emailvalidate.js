document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    var email = document.getElementById("emailInput").value;


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    
    window.location.href = "index2.html";
});
