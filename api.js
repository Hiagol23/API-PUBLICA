'use strict'

document.addEventListener("DOMContentLoaded", function() {
    const buttonsContainer = document.getElementById("buttonsContainer");
    const statuses = [100, 200, 300, 400, 500, 999];
    
    statuses.forEach(status => {
        let button = document.createElement("button");
        button.textContent = status;
        button.onclick = function() {
            window.location.href = `status${status}.html`;
        };
        buttonsContainer.appendChild(button);
    });
});
