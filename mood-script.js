const moodSelector = document.getElementById('mood-selector');
const getQuoteButton = document.getElementById('get-quote');
const moodQuote = document.getElementById('mood-quote');

// Mood-based quotes
const quotesByMood = {
    happy: ["Happiness depends upon ourselves.", "Choose to be happy today.", "The purpose of life is to live it."],
    motivated: ["Success is the sum of small efforts, repeated day in and day out.", "The way to get started is to quit talking and begin doing.", "Success doesn’t come from what you do occasionally, it comes from what you do consistently."],
    funny: ["Why don't skeletons fight each other? They don't have the guts!", "I'm on a seafood diet. I see food and I eat it.", "Parallel lines have so much in common. It’s a shame they’ll never meet."],
    sad: ["Tears are words the heart can't express.", "When you feel like giving up, remember why you started.", "Every day is a second chance."]
};

getQuoteButton.addEventListener('click', () => {
    const mood = moodSelector.value;
    const selectedQuotes = quotesByMood[mood];
    const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
    moodQuote.textContent = randomQuote;
});
