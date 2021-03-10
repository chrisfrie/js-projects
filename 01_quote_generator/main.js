let apiQuotes = [];

// Show new Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        getQuotes();
        console.log('whoops, no quote', error);
  }
}

// On Load  --> function to run
getQuotes();



// // For using the back-up (the localQuotes)

// // Show new Quote
// function newQuote() {
//     // Pick a random quote from apiQuotes array
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// // On Load  --> function to run
// newQuote();