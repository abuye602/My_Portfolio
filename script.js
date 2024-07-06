// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //   remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .portfolio-box, .contact", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Software Engineer", "Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".read-more");
  const hiddenContent = document.querySelector(".hidden-content");
  const initialContent = document.querySelector(".about-content > p");

  // Store initial content text
  const initialText = initialContent.textContent.trim();
  const maxLength = 300; // Maximum characters to show initially

  // Check if content needs truncation
  if (initialText.length > maxLength) {
    // Truncate the text and add ellipsis
    const truncatedText = initialText.slice(0, maxLength) + "...";
    initialContent.textContent = truncatedText;
  }

  readMoreBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Toggle the visibility of hidden content
    hiddenContent.style.display =
      hiddenContent.style.display === "none" ? "block" : "none";

    // Update button text based on visibility
    readMoreBtn.textContent =
      hiddenContent.style.display === "none" ? "Read More" : "Read Less";

    // Restore or truncate initial content text
    initialContent.textContent =
      hiddenContent.style.display === "none" ? truncatedText : initialText;
  });
});
