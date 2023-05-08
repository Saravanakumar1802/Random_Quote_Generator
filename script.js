let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const URL = "https://api.quotable.io/random";

const getQuote = (() => {
    fetch(URL)
        .then(res => res.json())
        .then((item) => {
            quote.innerHTML = item.content;
            author.innerHTML = `- ${item.author}`;
        });
})
window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote);