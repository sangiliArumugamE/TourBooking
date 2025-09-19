var _a, _b;
const tours = document.getElementById("tours");
const bookingForm = document.getElementById("booking");
const tourName = document.getElementById("tourName");
const bookButtons = document.querySelectorAll(".booknow");
const hero = document.getElementById("hero");
const find = document.getElementById("find");
const confirmBook = document.getElementById("confirmBook");
const bookForm = document.getElementById("bookingForm");
const payForm = document.getElementById("paymentForm");
const summary = document.getElementById("summary");
const images = [
    "./images/hero1.jpg",
    "./images/hero2.jpg",
    "./images/hero3.jpg",
    "./images/hero1.jpg"
];
let currentIndex = 0;
images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = `absolute w-full h-full transition-opacity duration-700 ${i === 0 ? "opacity-100" : "opacity-0"}`;
    hero.appendChild(img);
});
const slides = hero.querySelectorAll("img");
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("opacity-100", i === index);
        slide.classList.toggle("opacity-0", i !== index);
    });
}
(_a = document.getElementById("next")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
});
(_b = document.getElementById("prev")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
});
bookButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const selectedTour = btn.dataset.tour;
        const selectedBg = btn.dataset.bg;
        if (selectedTour && selectedBg) {
            tourName.innerHTML = `${selectedTour}`;
        }
        tours.classList.add("hidden");
        hero.classList.add("h-[100vh]");
        hero.style.backgroundImage = `url('${selectedBg}')`;
        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center";
        find.classList.add("hidden");
        bookingForm.classList.remove("hidden");
    });
});
const packagePrices = {
    basic: 5000,
    premium: 10000,
    luxury: 20000,
};
confirmBook.addEventListener("click", (e) => {
    var _a;
    const packageSelect = document.getElementById("package").value;
    const persons = parseInt(document.getElementById("persons").value) || 1;
    e.preventDefault();
    if (!packageSelect) {
        alert("Please select a package");
        return;
    }
    const price = ((_a = packagePrices[packageSelect]) !== null && _a !== void 0 ? _a : 0) * persons;
    summary.textContent = `You selected the ${packageSelect} package for ${persons} person(s). Total Price: ₹${price}`;
    bookForm.classList.add("hidden");
    payForm.classList.remove("hidden");
});
export {};
//# sourceMappingURL=index.js.map