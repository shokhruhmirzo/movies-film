let partMovies = movies.slice(0, 99)
let elList = document.querySelector('.movies__list')

partMovies.forEach((item, index) => {
    let newItem = document.createElement('li')
    newItem.innerHTML = `
    <li class="movies__item">
    <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" >
    <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg" alt="">
    </a>
    <p class="movies__text">${item.movie_year}</p>
    <h3 class="movies__h3">${item.Title}</h3>
    <p class="categories">${item.Categories}</p>
    <p class="app__rating">${item.imdb_rating}</p>
</li>
    `

    elList.appendChild(newItem)
})

//https://i.ytimg.com/vi/Kc9bO_BuHrc/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLCqQAOGmzwWaeQJUNhLoKvkIYLjtw