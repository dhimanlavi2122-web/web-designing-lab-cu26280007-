// 1. Hero slider
const slides = [
    "Fresh Organic Coffee ☕",
    "Healthy Organic Food 🥗",
    "A Greener Tomorrow 🌱"
];

let currentSlide = 0;

const slideTitle = document.getElementById("slide-title");
const nextSlideButton = document.getElementById("next-slide");

nextSlideButton.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    slideTitle.textContent = slides[currentSlide];
});


// 2. Booking form
const bookingForm = document.getElementById("booking-form");
const message = document.getElementById("message");
const dateInput = document.getElementById("date");

// Past dates ko select hone se rokna
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    message.textContent =
        "Thank you, " + name +
        "! Your demo booking request has been received.";

    bookingForm.reset();
    dateInput.min = today;
});


// 3. Share button
const shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", async function () {
    const shareData = {
        title: "Root & Roast",
        text: "Visit Root & Roast – Fresh Organic Food and Coffee!",
        url: window.location.href
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(shareData.url);
            alert("Website link copied!");
        } else {
            alert("Share this website: " + shareData.url);
        }
    } catch (error) {
        console.log("Sharing cancelled or unavailable.");
    }
});