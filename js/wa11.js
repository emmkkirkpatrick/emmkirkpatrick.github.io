const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const answerButton = document.querySelector("#js-tweet");
answerButton.addEventListener('click', showAnswer);

const endpoint = 'https://motivational-quotes-quotable-api.p.rapidapi.com/motivational_quotes';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a860ad88bmshef8417b96d11fd2p1ae081jsn9b7e9c4dfe27',
		'X-RapidAPI-Host': 'motivational-quotes-quotable-api.p.rapidapi.com'
	}
};

const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';

const imgOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a860ad88bmshef8417b96d11fd2p1ae081jsn9b7e9c4dfe27',
		'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
    }}

fetch(url, imgOptions)
  .then(response => response.blob())
  .then(blob => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.getElementById("image");
    image.src = objectURL;
  });


// const imgEndpoint = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
// // 	}
// };


async function getQuote() {
    try {
        const response = await fetch(endpoint, options)
        // if (!response.ok) {
            // throw Error(response.statusText);
        // }
        const json = await response.json();
        displayQuote(json.quote);
        showAnswer(json.author);

        const answerButton = document.querySelector("#js.tweet");
        answerButton.addEventListener('click', showAnswer(author));
        return;
    }
    catch(err) {
        console.log(err);
        // alert('Failed to fetch new trivia')
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function showAnswer(author) {
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = author;
}

function showImage(image) {
    const memeImages = document.querySelector("#image")
    memeImages.image = image;
}