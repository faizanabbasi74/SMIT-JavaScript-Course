(async function () {
  const response = await fetch("./data.json");
  const movies = await response.json();

  // console.log(movies);

  // const listing = movies.forEach(function(movie){
  //   console.log(movie.original_language)
  // })

  // const ratingList = [];
  // const listing1 = movies.forEach(function (movie) {
  // console.log(movie.vote_average);
  //   ratingList.push(movie.vote_average);
  //   return ratingList;
  // });
  // // console.log(ratingList);
  // const uniqueList = [...new Set(ratingList)];
  // console.log(uniqueList);

  // const genreList = [];
  // const listing2 = movies.forEach(function (movie) {
  //   console.log(movie.genres);
  //   genreList.push(...movie.genres);
  //   return genreList;
  // });

  // const uniqueList2 = [...new Set(genreList)];
  // console.log(uniqueList2);

  const genreElem = document.getElementById("Genre");
  // const ratingElem = document.getElementById("Rating");
  const yearElem = document.getElementById("releaseYear");
  const languageElem = document.getElementById("Language");
  const btnElem = document.getElementById("searchBtn");
  const listElem = document.getElementById("movie-list");
  const detailsElem = document.getElementById("movieDetailsContainer");

  function loadMovieDetails(movie) {
    detailsElem.innerHTML = `
        <h2 class="title">${movie.title}</h2>
        <h3>Movie Details:</h3>
        <ul><b>Overview:</b> ${movie.overview}</ul>
        <ul><b>Release Date:</b> ${movie.release_date}</ul>
        <ul><b>Cert:</b> ${movie.certification}</ul>
        <ul><b>Runtime:</b> ${movie.runtime}</ul>
    `;
  }
  
  
  function dispSearchResult(results) {
    listElem.innerHTML= ""
    results.forEach((movie) => {
      // console.log(movie);
      const li = document.createElement("li");
      const listItem = `
          <h2 class="title">${movie.title}</h2>
          <div class="description">${movie.overview}</div>
      `;
      li.innerHTML = listItem;
      li.addEventListener("click", function () {
        loadMovieDetails(movie);
      });
      listElem.appendChild(li);
    })
    }

  function searchFunc() {
    const query1 = genreElem.value;
    console.log(query1);

    // const query2 = ratingElem.value.toString();
    // console.log(query2);

    const query3 = yearElem.value;
    console.log(query3);

    const query4 = languageElem.value;
    console.log(query4);

    const results = movies.filter(function (movie) {
      return (
        movie.genres.includes(query1) &&
        movie.release_date.split("-").includes(query3) &&
        movie.original_language.includes(query4)
        // movie.vote_average.includes(query2)
      );
    });

    dispSearchResult(results);
    // console.log(results)
  }

  btnElem.addEventListener("click", searchFunc);
})();
