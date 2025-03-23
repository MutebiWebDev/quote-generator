const quotes = [
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
  },
  {
    text: "Believe you can and you're halfway there.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad"
  },
  {
    text: "Dream big and dare to fail.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  }
];

function generateQuote() {
  const quoteText = document.getElementById("quote");
  const quoteImage = document.getElementById("quote-image");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  quoteText.textContent = quotes[randomIndex].text;
  quoteImage.src = quotes[randomIndex].image;
  quoteImage.style.display = "block";
}