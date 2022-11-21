
chrome.runtime.sendMessage({ name: "fetchWords"}, (response) => {

    document.querySelector('h1').innerHTML = response.word
    document.querySelector('p').innerHTML = response.mean


    console.log(response);

})