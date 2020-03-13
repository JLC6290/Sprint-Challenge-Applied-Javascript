// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        var object = response;
    })


function createCard(data) {
    var card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    img.src = data.authorPhoto; 
    headline.textContent = data.headline;
    authorName.textContent = data.authorName;

    imgContainer.append(img);
    author.append(imgContainer, authorName);
    card.append(headline, author);

    return card;
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        var things = Object.keys(response.data.articles);
        for(let i = 0; i < things.length; i++) {
            var selector = things[i];
            response.data.articles[selector].forEach(item => {
                document.querySelector('.cards-container').append(createCard(item));
            });
        }
    })
    .catch(error => {
        console.log('error = ', error);
    })