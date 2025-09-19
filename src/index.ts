const tours = document.getElementById("tours") as HTMLDivElement;
const bookingForm = document.getElementById("booking") as HTMLElement;
const tourName = document.getElementById("tourName") as HTMLElement;
const bookButtons = document.querySelectorAll<HTMLButtonElement>(".booknow");
const hero = document.getElementById("hero") as HTMLElement;
const find = document.getElementById("find") as HTMLDivElement;

const confirmBook = document.getElementById("confirmBook") as HTMLButtonElement;
const bookForm = document.getElementById("bookingForm") as HTMLDivElement;
const payForm = document.getElementById("paymentForm") as HTMLElement;
const summary = document.getElementById("summary") as HTMLParagraphElement;


const images : string[]=[
    
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
function showSlide(index: number) {
  slides.forEach((slide, i) => {
    (slide as HTMLImageElement).classList.toggle("opacity-100", i === index);
    (slide as HTMLImageElement).classList.toggle("opacity-0", i !== index);
  });
}

document.getElementById("next")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
});

document.getElementById("prev")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
});



bookButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedTour = btn.dataset.tour;
    const selectedBg = btn.dataset.bg;
  

    if(selectedTour && selectedBg){
      tourName.innerHTML = `${selectedTour}`;
     
      
    }
    tours.classList.add("hidden");
    hero.classList.add("h-[100vh]")
    hero.style.backgroundImage = `url('${selectedBg}')`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    find.classList.add("hidden")
    bookingForm.classList.remove("hidden");
    
    
  });
});

const packagePrices: Record<string, number> = {
  basic: 5000,
  premium: 10000,
  luxury: 20000,
};

confirmBook.addEventListener("click",(e)=>{
  const packageSelect = (document.getElementById("package") as HTMLSelectElement).value;
  const persons = parseInt((document.getElementById("persons") as HTMLInputElement).value) || 1;

  e.preventDefault(); 

  if (!packageSelect) {
    alert("Please select a package");
    return;
  }

  const price = (packagePrices[packageSelect]??0) * persons;
  summary.textContent = `You selected the ${packageSelect} package for ${persons} person(s). Total Price: ₹${price}`;
  bookForm.classList.add("hidden")
  payForm.classList.remove("hidden");
})

