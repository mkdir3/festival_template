// Title animation
function makeMarquee() {
  const title = "FIFTY Music Festival — November 10–12, Desert Valley";

  // removing the array coma and replace it
  const marqueeText = new Array(50).fill(title).join(" - ");

  const marquee = document.querySelector(".marquee span");

  marquee.innerHTML = marqueeText;
}

makeMarquee();

//  gets a random number for the rotation
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Circles animation
const circles = document.querySelectorAll(".circle");
circles.forEach((item, index) => {
  item.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.2)" },
      { transform: "scale(1)" },
    ],
    {
      // add diferent delay for each, according to the index
      delay: 300 * index,
      duration: 3000,
      iterations: Infinity,
    }
  );
});

// Squiggles animation
const squiggles = document.querySelectorAll(".squiggle");
squiggles.forEach((item, index) => {
  // gets a random number for the rotation & for the animation delay
  const randomNumber = random(0, 45);

  item.animate(
    [
      { transform: "rotate(0)" },
      { transform: `rotate(${randomNumber}deg)` },
      { transform: "rotate(0)" },
    ],
    {
      // add diferent delay for each, according to the index
      delay: 300 * index,
      duration: 5000,
      iterations: Infinity,
    }
  );
});

// Detect when section enters the viewport and animate it
inView(".section")
  .on("enter", (el) => {
    el.classList.add("in-viewport");
  })
  .on("exit", (el) => {
    el.classList.remove("in-viewport");
  });
// appears when 20% of the section has been scrolled
inView.threshold(0.2);

// loop in each section to grab element then add a different delay for each
const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  const artists = section.querySelectorAll(".lineup li");
  const shapes = section.querySelectorAll(".shape");

  artists.forEach((artist, index) => {
    artist.style.transitionDelay = index * 100 + "ms";
  });

  shapes.forEach((shape, index) => {
    // setting delay once the artists have faded in
    const delay = (artists.length + index) * 100 + "ms";
    shape.style.transitionDelay = delay;
  });
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll(".js-scroll");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // grab the att of our link
    const href = link.getAttribute("href");
    // scroll smoothly to the el
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  });
});
