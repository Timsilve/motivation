let quotes = document.getElementById("quote");
let author = document.getElementById("author");
let button = document.getElementById("button");
let facebook = document.getElementById("facebook");
let twitter = document.getElementById("twitter");

async function getQuotes() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  author.textContent = data.author;
  quotes.textContent = data.content;
}

button.addEventListener("click", getQuotes);

twitter.addEventListener("click", function () {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quotes.innerHTML +
      " " +
      "By" +
      " " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
});

facebook.addEventListener("click", () => {
    const fburl =`https://www.facebook.com/sharer/sharer.php?u="${quotes.innerHTML}" "" "${author.innerHTML}"`
  
  window.open(
      fburl,
    "facebook share",
    "width=600,height=300"
  );
});
