chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.name == "fetchWords") {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fa886cecfcmsh8bed26a3b845cb8p1a4d0ejsnef034b5bbb1e',
                'X-RapidAPI-Host': 'word-of-the-day2.p.rapidapi.com'
            }
        };
        
        fetch('https://word-of-the-day2.p.rapidapi.com/word/dc/recent', options)
            .then(response => response.json())

            // Sending response
            .then(response => sendResponse(response[getRandomNumber(3)]))

            // Catching errors
            .catch(err => console.error(err));

            return true;
        
    }
})

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max))
}