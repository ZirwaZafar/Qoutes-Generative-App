const voiceButton = document.getElementById('voice-button');
const quoteBox = document.getElementById('quote-box');

// List of quotes
const quotes = [
    "The best way to predict the future is to create it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Don’t wait. The time will never be just right."
];

voiceButton.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.onstart = () => {
        console.log("Listening for your command...");
    };

    recognition.onresult = (event) => {
        const speech = event.results[0][0].transcript.toLowerCase();
        if (speech.includes('give me a quote')) {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            quoteBox.textContent = randomQuote;
        } else {
            quoteBox.textContent = "Please say 'Give me a quote' to get a random quote.";
        }
    };

    recognition.start();
});
