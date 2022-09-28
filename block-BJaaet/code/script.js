let form = document.querySelector('form');

function addMovieList(event) {
    event.preventDefault();
    let movieName = event.target.elements.movieInput.value;
    let movieList = document.querySelector('ul.movie-list');
    console.log(movieName);
    let movieLi = document.createElement('li');


    let spanMovieName = document.createElement('div');
    spanMovieName.innerText = movieName;


    let spanClose = document.createElement('div');
    spanClose.innerText = "close";
    spanClose.setAttribute('class', `closeButton`);


    movieLi.setAttribute('class', 'movie-item');
    movieLi.classList.add('liFlex');
    
    spanClose.addEventListener('click', () => movieLi.setAttribute('class', 'close'));

    movieLi.append(spanMovieName);
    movieLi.append(spanClose);

    // movieLi.innerText = movieName;
    movieList.append(movieLi);
}

form.addEventListener('submit', (event) => addMovieList(event));
