const quotes = [
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe" },
  { text: "Believe you can and you're halfway there.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { text: "Don't watch the clock; do what it does. Keep going.", image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad" },
  { text: "Dream big and dare to fail.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { text: "The emotion that can break your heart is sometimes the very one that heals it.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
  { text: "Don't cry when the sun is gone, because the tears won't let you see the stars.", image: "https://images.unsplash.com/photo-1495563381401-ecfbcaaa60f2" },
  { text: "You can't start the next chapter of your life if you keep re-reading the last one.", image: "https://images.unsplash.com/photo-1518655048521-f130df041f66" },
  { text: "Sometimes good things fall apart so better things can fall together.", image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f" },
  { text: "The best way to heal a broken heart is to give God all the pieces.", image: "https://images.unsplash.com/photo-1517842645767-c639042777db" },
  { text: "Someday, you'll look back and understand why it all happened the way it did.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
  // Add more quotes here
  { text: "The only way to do great work is to love what you do.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", image: "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "You are never too old to set another goal or to dream a new dream.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Act as if what you do makes a difference. It does.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "Success usually comes to those who are too busy to be looking for it.", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { text: "Don't be afraid to give up the good to go for the great.", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { text: "I find that the harder I work, the more luck I seem to have.", image: "https://images.unsplash.com/photo-1517842645767-c639042777db" },
  { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7" },
  { text: "In the end, we only regret the chances we didn't take.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "The best revenge is massive success.", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7" },
  { text: "Believe you can and you're halfway there.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", image: "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "It is during our darkest moments that we must focus to see the light.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "Whoever is happy will make others happy too.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { text: "Always remember that you are absolutely unique. Just like everyone else.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "The only impossible journey is the one you never begin.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "The purpose of our lives is to be happy.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "Life is what happens when you're busy making other plans.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Get busy living or get busy dying.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", image: "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6" },
  { text: "Believe you can and you're halfway there.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "The only way to do great work is to love what you do.", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7" },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "Opportunities don't happen. You create them.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Don't be afraid to give up the good to go for the great.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "I find that the harder I work, the more luck I seem to have.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "In the end, we only regret the chances we didn't take.", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "The best revenge is massive success.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "Believe you can and you're halfway there.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "It is during our darkest moments that we must focus to see the light.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Whoever is happy will make others happy too.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "Always remember that you are absolutely unique. Just like everyone else.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "The only impossible journey is the one you never begin.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "The purpose of our lives is to be happy.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "Life is what happens when you're busy making other plans.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Get busy living or get busy dying.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", image: "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6" },
  { text: "Believe you can and you're halfway there.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "The only way to do great work is to love what you do.", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7" },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "Opportunities don't happen. You create them.", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  { text: "Don't be afraid to give up the good to go for the great.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de01aa3" },
  { text: "I find that the harder I work, the more luck I seem to have.", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { text: "In the end, we only regret the chances we didn't take.", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7" }
];

function generateQuote() {
  const quoteText = document.getElementById("quote");
  const quoteImage = document.getElementById("quote-image");
  
  // Ensure the elements exist on the page
  if (quoteText && quoteImage) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Update the quote text and image
    quoteText.textContent = quotes[randomIndex].text;
    quoteImage.src = quotes[randomIndex].image;
    quoteImage.style.display = "block"; // Ensure the image is displayed
  } else {
    console.error("Quote text or image element not found.");
  }
}
