"use-strict";

const add = document.getElementById("add");
add.onclick = () => {
  window.location.href = "./editor.html";
};

const cancel = document.getElementById("cancel");
const menupage = document.getElementById("menu-page");

let menuOut = true;
cancel.onclick = () => {
  menuOut = !menuOut;

  if (menuOut) {
    menupage.style.transform = "translateX(0%)";
  } else {
    menupage.style.transform = "translateX(-100%)";
  }
};

const menubar = document.getElementById("menu");
menubar.onclick = () => {
  menupage.style.transform = "translateX(0%)";
};

const settings = document.getElementById("settings-placeholder");
const setting = document.getElementById("settings");
settings.onclick = () => {
  menuOut = !menuOut;
  if (menuOut) {
    setting.style.height = "40px";
  } else {
    setting.style.height = "max-content";
  }
};

const header = document.getElementById("header");
const search = document.getElementById("search");

search.onclick = () => {
  menuOut = !menuOut;

  if (menuOut) {
    header.style.height = "70px";
  } else {
    header.style.height = "max-content";
  }
};

// const searchbar = document.querySelector("#search-bar");
// searchbar.addEventListener("input", () => {
//   const quotes = document.querySelectorAll("#your-quote .quote");
//   const searchDisplay = document.querySelector("#search-display");
//   const searchInput = searchbar.value.trim().toLowerCase();

//   searchDisplay.innerHTML = "";

//   quotes.forEach((quote) => {
//     const quoteText = quote.textContent.toLowerCase();

//     if (quoteText.includes(searchInput)) {
//       const regex = new RegExp(searchInput, "gi");

//       quote.replace(
//         regex,
//         (match) => `<span class="highlight">${match}</span>`
//       );

//       searchDisplay.appendChild(quote);
//     } else {
//       setTimeout(() => {
//         searchDisplay.innerText = "No Quote found!";
//       }, 2000);
//     }
//   });
// });

const searchbar = document.querySelector("#search-bar");
const searchDisplay = document.querySelector("#search-display");

let timeoutId; // For debouncing

function searchQuotes(searchInput) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    searchDisplay.innerHTML = "";

    const quotes = document.querySelectorAll("#your-quote .quote");
    let matchingQuoteFound = false;

    quotes.forEach((quote) => {
      const quoteText = quote.textContent.toLowerCase();

      if (quoteText.includes(searchInput)) {
        const regex = new RegExp(searchInput, "gi");
        const highlightedText = quoteText.replace(
          regex,
          `<span class="highlight">$&</span>`
        );
        const highlightedQuote = document.createElement("div");
        highlightedQuote.innerHTML = highlightedText;
        searchDisplay.appendChild(highlightedQuote);
        matchingQuoteFound = true;
        alert('found!')
      }
    });

    if (!matchingQuoteFound) {
      searchDisplay.innerText =
        "No matching quotes found. Try a different search.";
        alert('not found!')
    }

  }, 200); // Adjust timeout as needed
}

searchbar.addEventListener("fullscreenchange", (event) => {
  searchQuotes(event.target.value.trim().toLowerCase());
});

// Accessibility: Ensure sufficient color contrast and semantic HTML usage
searchDisplay.classList.add("search-results"); // For styling and accessibility
quotes.forEach((quote) => quote.classList.add("quote")); // Semantic element
