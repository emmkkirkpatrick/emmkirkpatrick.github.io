const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const answerButton = document.querySelector("#js-tweet");
answerButton.addEventListener('click', showAnswer);

const endpoint = "https://metaapi-mindfulness-quotes.p.rapidapi.com/v1/mindfulness";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a860ad88bmshef8417b96d11fd2p1ae081jsn9b7e9c4dfe27',
		'X-RapidAPI-Host': 'metaapi-mindfulness-quotes.p.rapidapi.com'
	}
};

// fetch('https://metaapi-mindfulness-quotes.p.rapidapi.com/v1/mindfulness', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))


async function getQuote() {
    try {
        const response = await fetch(endpoint, options)
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.question);
        console.log(json.answer);

        const answerButton = document.querySelector("#js.tweet");
        answerButton.addEventListener('click', showAnswer(answer));
        return;
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new trivia')
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function showAnswer(answer) {
    const answerText = document.querySelector("#js-quote-text");
    answerText.textContent = answer;
}