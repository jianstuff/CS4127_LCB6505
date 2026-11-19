function updateClock() {

    let currentTime = new Date();

    let bruneiTime = currentTime.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Brunei",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("brunei-clock").textContent = bruneiTime;
}

updateClock();

setInterval(updateClock, 1000);






const themeButton = document.getElementById("theme-toggle");

// Check if a theme was previously saved
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Light Mode";
}

// Switch themes when button is clicked
themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");

    }

});





// HOMEPAGE IMAGE CAROUSEL

const homepage = document.getElementById("homepage");

const images = [
    "https://www.pinyourfootsteps.com/wp-content/uploads/2024/06/brunei-3-scaled.jpg",

    "https://resource.midasuser.com/hubfs/EN_MIDAS%20BRIDGE/04.%20Customers%20(%EC%82%AC%EC%97%85%ED%8C%80%EC%A0%91%EA%B7%BCX)/02.%20Content%20Images/Project%20Application/10%20Temburong%20CC3%20Bridge/Civil_Temburong%20CC3%20Bridge_BN-2.jpg",

    "https://i0.wp.com/borneoadventure.com/v3/wp-content/uploads/2012/01/BRN_DK_5221.jpg?fit=2000%2C1331&quality=60&strip=all&ssl=1"

    
];

let currentImage = 0;

// Change homepage background
function showImage() {

    homepage.style.backgroundImage =
        `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
        url("${images[currentImage]}")`;

}

// Next image
document.getElementById("next-btn").addEventListener("click", function() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();

});

// Previous image
document.getElementById("prev-btn").addEventListener("click", function() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();

});