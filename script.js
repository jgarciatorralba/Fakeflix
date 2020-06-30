/* Generate mini-database with movies: */
const movies = [{
    id: 1,
    title: "Cidade de Deus",
    genre: ["Drama", "Crime", "Drugs"],
    src: "assets/cidade_de_deus.jpg",
    year: 2002,
    actors: [
      "Alexandre Rodrigues",
      "Leandro Firmino",
      "Phellipe Haagensen",
      "Douglas Silva",
    ],
    directors: ["Fernando Meirelles", "Kátia Lund"],
    synopsis: "Cidade de Deus (City of God) is a housing project built in the 1960's that--in the early 80's--became one of the most dangerous places in Rio de Janeiro. The tale tells the stories of many characters whose lives sometimes intersect. However, all is seen through the eyes of a singular narrator: Busca-Pé, a poor black youth too frail and scared to become an outlaw but also to smart to be content with underpaid, menial jobs. He grows up in a very violent environment. The odds are all against him. But Busca-Pé soon discovers that he can see reality differently than others. His redemption is that he's been given an artist's point of view as a keen-eyed photographer. As Busca-Pé is not the real protagonist of the film--only the narrator--he is not the one who makes the decisions that will determine the sequence of events. Nevertheless, not only his life is attached to what happens in the story, but it is also through Busca-Pé's perspective of life that one can understand the complicated layers and humanity of a world, apparently condemned to endless violence.",
  },
  {
    id: 2,
    title: "The Godfather",
    genre: ["Drama", "Mafia", "Crime"],
    src: "assets/the_godfather.jpg",
    year: 1972,
    actors: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall",
      "Diane Keaton",
      "John Cazale",
      "Talia Shire",
    ],
    directors: ["Francis Ford Coppola"],
    synopsis: "Epic tale of a 1940s New York Mafia family and their struggle to protect their empire from rival families as the leadership switches from the father (Marlon Brando) to his youngest son (Al Pacino). Vito Corleone (Marlon Brando) is The Godfather, the Don (head) of a successful, tightly-knit family whose business is organized crime. Heir apparent is impulsive, hot-tempered Sonny (James Caan), whose brothers are brooding Michael (Al Pacino), who tries to seperate himself from his criminal family, and Fredo (John Cazale), who can't seem to do anything right. Vito has also adopted level-headed Tom Hagan (Robert Duvall), now the family lawyer. Vito's refusal to enter the lucrative drug rackets puts him in a war between the mafia families. Michael gets his hand dirty by taking revenge on the family's behalf, and then taking over as the new calculating, ruthless godfather. In his new role he plots to make the Corleones the leading players in Las Vegas casino industry while arranging for the war in New York City to be settled for once and for all.",
  },
  {
    id: 3,
    title: "Joker",
    genre: ["Drama", "Thriller"],
    src: "assets/joker.jpg",
    year: 2019,
    actors: [
      "Joaquin Phoenix",
      "Robert De Niro",
      "Zazie Beetz",
      "Frances Conroy",
      "Brett Cullen",
      "Bill Camp",
    ],
    directors: ["Todd Phillips"],
    synopsis: "Year 1981. In Gotham City, mentally-troubled Arthur Fleck (Joaquin Phoenix) works as a clown-for-hire and lives with his mother, Penny. Arthur, whose motivation in life is to make people laugh, wants to be a stand-up comedian, but he is ignored by society, and a series of tragic events will take him to see the world in a different way, full of anger and rage against everyone and everything.",
  },
  {
    id: 4,
    title: "Parasite",
    genre: ["Drama", "Mistery", "Comedy", "Thriller"],
    src: "assets/parasite.jpg",
    year: 2019,
    actors: ["Song Kang-ho", "Lee Seon-gyun", "Jang Hye-jin", "Cho Yeo-jeong"],
    directors: ["Bong Joon-ho"],
    synopsis: "A peculiar tale about two families who are worlds apart yet somewhat alike portrays a striking reality of the world we live in. Gi Taek (Song Kang-ho) and his family are all unemployed. When his eldest son, Gi Woo (Choi Woo-sik), begins to give private lessons at the house of a man named Park (Lee Seon-gyun), the two families start to interact in unexpected ways.",
  },
  {
    id: 5,
    title: "Bohemian Rhapsody",
    genre: ["Drama", "Biography", "Music"],
    src: "assets/bohemian_rhapsody.jpg",
    year: 2018,
    actors: [
      "Rami Malek",
      "Joseph Mazzello",
      "Ben Hardy",
      "Gwilym Lee",
      "Lucy Boynton",
    ],
    directors: ["Bryan Singer"],
    synopsis: "This is the story of how Freddie Mercury and his fellow band members Brian May, Roger Taylor and John Deacon formed Queen - one of the most iconic rock groups of all time. The film follows Queen as they produce hit after hit, topping the charts while constantly evolving their sound. Bohemian Rhapsody is a foot-stomping celebration of the band, their music and their extraordinary lead singer Freddie Mercury, who defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The story traces the meteoric rise of the band through their iconic songs and revolutionary sound, their near-implosion as Mercury's lifestyle spirals out of control, and their triumphant reunion on the eve of Live Aid, where Mercury, facing a life-threatening illness, leads the band in one of the greatest performances in the history of rock music. In the process, cementing the legacy of a band that were always more like a family, and who continue to inspire outsiders, dreamers and music lovers to this day.",
  },
  {
    id: 6,
    title: "The Shape of Water",
    genre: ["Fantasy", "Drama", "Romance", "Thriller"],
    src: "assets/the_shape_of_water.jpg",
    year: 2017,
    actors: [
      "Sally Hawkins",
      "Doug Jones",
      "Michael Shannon",
      "Octavia Spencer",
      "Richard Jenkins",
    ],
    directors: ["Guillermo del Toro"],
    synopsis: "An other-worldly fairy tale, set against the backdrop of Cold War era America circa 1963. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of silence and isolation. Elisa’s life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment.",
  },
  {
    id: 7,
    title: "Arrival",
    genre: ["Science-Fiction", "Drama"],
    src: "assets/arrival.jpg",
    year: 2016,
    actors: [
      "Amy Adams",
      "Jeremy Renner",
      "Forest Whitaker",
      "Michael Stuhlbarg",
      "Mark O'Brien",
    ],
    directors: ["Denis Villeneuve"],
    synopsis: "When alien crafts land around the world, an expert linguist (Amy Adams) is recruited by the military to determine whether they come in peace or are a threat. As she learns to communicate with the aliens, she begins experiencing vivid flashbacks that become the key to unlocking the greater mystery about the true purpose of their visit... The Story of Your Life, an adaptation of a short story by Nebula and Hugo Award-winning author Ted Chiang.",
  },
  {
    id: 8,
    title: "The Revenant",
    genre: ["Adventure", "Western"],
    src: "assets/the_revenant.jpg",
    year: 2015,
    actors: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"],
    directors: ["Alejandro González Iñárritu"],
    synopsis: "Year 1823. In an expedition of the uncharted American wilderness, legendary explorer Hugh Glass (Leonardo DiCaprio) is brutally attacked by a bear and left for dead by members of his own hunting team. In a quest to survive, Glass endures unimaginable grief as well as the betrayal of his confidant John Fitzgerald (Tom Hardy). Guided by sheer will and the love of his family, Glass must navigate a vicious winter in a relentless pursuit to live and find redemption.",
  },
  {
    id: 9,
    title: "Birdman",
    genre: ["Comedy", "Drama"],
    src: "assets/birdman.jpg",
    year: 2014,
    actors: [
      "Michael Keaton",
      "Emma Stone",
      "Edward Norton",
      "Zach Galifianakis",
      "Naomi Watts",
    ],
    directors: ["Alejandro González Iñárritu"],
    synopsis: "A washed up actor who once played an iconic superhero must overcome his ego and family trouble as he prepares to mount a Broadway play in a bid to reclaim past glory. Movie star Riggan Thomson (Michael Keaton), who became famous for playing iconic superhero Birdman in three successful installments but turned down a fourth one, has decided to stage a comeback by writing, directing and starring in a Broadway play.",
  },
  {
    id: 10,
    title: "Gravity",
    genre: ["Thriller", "Drama"],
    src: "assets/gravity.jpg",
    year: 2013,
    actors: ["Sandra Bullock", "George Clooney", "Ed Harris"],
    directors: ["Alfonso Cuarón"],
    synopsis: "A medical engineer and an astronaut work together to survive after an accident leaves them adrift in space. Dr. Ryan Stone is a brilliant medical engineer on her first shuttle mission, with veteran astronaut Matt Kowalsky. But on a seemingly routine spacewalk, disaster strikes. The shuttle is destroyed, leaving Stone and Kowalsky completely alone—tethered to nothing but each other and spiraling out into the blackness. The deafening silence tells them they have lost any link to Earth... and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space.",
  },
  {
    id: 11,
    title: "1917",
    genre: ["War", "Drama"],
    src: "assets/1917.jpg",
    year: 2019,
    actors: ["George MacKay", "Dean-Charles Chapman", "Mark Strong", "Richard Madden"],
    directors: ["Sam Mendes"],
    synopsis: "Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldiers' brothers, from walking straight into a deadly trap.",
  },
  {
    id: 12,
    title: "Pulp Fiction",
    genre: ["Thriller", "Crime"],
    src: "assets/pulp_fiction.jpg",
    year: 1994,
    actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis", "Ving Rhames", "Harvey Keitel", "Tim Roth", "Amanda Plummer"],
    directors: ["Quentin Tarantino"],
    synopsis: "The film interweaves three tales: the first story focuses on Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson), two hit men on duty for \"the big boss\", Marsellus Wallace (Ving Rhames), whose gorgeous wife, Mia (Uma Thurman), takes a liking to Vincent. In the second, a down-and-out pugilist (Bruce Willis), who is ordered to take a fall, decides that there’s more money in doing the opposite. The final chapter follows a pair of lovers (Amanda Plummer and Tim Roth) as they prepare to hold up a diner.",
  },
  {
    id: 13,
    title: "The Matrix",
    genre: ["Science-Fiction", "Fantasy", "Action", "Thriller"],
    src: "assets/the_matrix.jpg",
    year: 1999,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Joe Pantoliano", "Hugo Weaving"],
    directors: ["Lilly Wachowski", "Lana Wachowski"],
    synopsis: "In the near future, Computer hacker Neo is contacted by underground freedom fighters who explain that reality as he understands it is actually a complex computer simulation called the Matrix. Created by a malevolent Artificial Intelligence, the Matrix hides the truth from humanity, allowing them to live a convincing, simulated life in 1999 while machines grow and harvest people to use as an ongoing energy source. The leader of the freedom fighters, Morpheus, believes Neo is \"The One\" who will lead humanity to freedom and overthrow the machines. Together with Trinity, Neo and Morpheus fight against the machine's enslavement of humanity as Neo begins to believe and accept his role as \"The One\".",
  },
  {
    id: 14,
    title: "Seven (Se7en)",
    genre: ["Thriller", "Mystery", "Crime"],
    src: "assets/seven.jpg",
    year: 1995,
    actors: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow", "Kevin Spacey", "John C. McGinley"],
    directors: ["David Fincher"],
    synopsis: "Set in a perpetually gloomy unnamed city, the film follows Somerset (Morgan Freeman), a retiring police detective, as he experiences his final week on the job, reluctantly working with assertive newcomer Mills (Brad Pitt). When an obese man is found brutally murdered in his home, the seasoned Somerset realizes this is no ordinary killing--someone tortured him because of his appetite. Slayings that reflect the sins of greed and sloth soon follow, leading Somerset and Mills on a desperate search to find the mysterious John Doe, who is responsible for these methodical murders. As the case builds to a startling conclusion, both Somerset and Mills become more involved than they ever could have imagined.",
  },
  {
    id: 15,
    title: "The Wolf of Wall Street",
    genre: ["Drama", "Comedy"],
    src: "assets/the_wolf_of_wall_street.jpg",
    year: 2013,
    actors: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Kyle Chandler", "Cristin Milioti", "Rob Reiner", "Matthew McConaughey"],
    directors: ["Martin Scorsese"],
    synopsis: "Young middle-class Jordan Belfort (Leonardo DiCaprio), a hard-partying, drug addicted New York stockbroker and owner of the company Stratton Oakmont, refuses to cooperate in a massive securities fraud case that involves widespread corruption on Wall Street and in the corporate banking world, including mob infiltration. Based on the autobiography by Jordan Belfort.",
  }
];

/* Event Listeners */
document.querySelector(".search i").addEventListener("click", toggleBar);

var myInput = document.querySelector('.input-search');
document.querySelector('.input-search').addEventListener("keyup", processInput);

document.querySelector('#results-box').addEventListener('click', function (event) {
  let fullString = event.target.src;
  if (typeof (fullString) != 'undefined') {
    let src = fullString.substring(fullString.lastIndexOf("/"), fullString.length);
    displayMovieInfo(src);
  }
});

document.querySelector('#close-movie').addEventListener('click', function () {
  document.querySelector('.info-movie-container').classList.remove('unhide-container');
  document.body.style.height = '';
  document.body.style.overflowY = 'auto';
})

document.querySelector('#close-form').addEventListener('click', function () {
  document.querySelector('.form-box-container').classList.remove('unhide-container');
  document.body.style.height = '';
  document.body.style.overflowY = 'auto';
  cleanFormInputs();
  clearInterval(sessionExpiration);
})

document.querySelector('#buy').addEventListener('click', function () {
  document.querySelector('.info-movie-container').classList.remove('unhide-container');
  document.querySelector('.form-box-container').classList.add('unhide-container');
  document.querySelector('.warning-message').classList.add('unhide-container');
  document.querySelector('.form-box').style.pointerEvents = 'none';
  // Store setTimeout() in a variable to be able to clean it later
  setTimeout(function () {
    document.querySelector('.form-box').style.pointerEvents = '';
    document.querySelector('.warning-message').classList.remove('unhide-container');
  }, 1000 * 10);
  // Re-direct to main page after 5 minutes of inactivity during the completion of the form
  sessionExpiration = setTimeout(function () {
    window.location.href = "index.html";
  }, 1000 * 60 * 5);
  cleanFormInputs();
  document.getElementById('purchased-title').innerHTML = "<b>Title: </b>" + myMovie.title;
});

document.getElementById('birthdate').addEventListener('focus', function () {
  this.type = 'date';
  //changedOK = false;
  //changedNOK = false;
  //oldValue = document.getElementById('birthdate').value;
  if (document.getElementById('birthdate').parentElement.className === ('form-field success')) {
    document.getElementById('birthdate').parentElement.className = ('form-field');
    //changedOK = true;
  }
  if (document.getElementById('birthdate').parentElement.className === ('form-field error')) {
    document.getElementById('birthdate').parentElement.className = ('form-field');
    //changedNOK = true;
  }
});

document.getElementById('birthdate').addEventListener('blur', function () {
  this.type = 'text';
  let newValue = document.getElementById('birthdate').value;
  if (document.getElementById('birthdate').value !== '') {
    document.getElementById('birthdate').value = convertDateFormat(newValue);
  }
  /*
  if (changedOK) { //&& document.getElementById('birthdate').value === oldValue) {
    document.getElementById('birthdate').parentElement.className = ('form-field success');
  }
  if (changedNOK) { //&& document.getElementById('birthdate').value === '') {
    document.getElementById('birthdate').parentElement.className = ('form-field error');
  }
  */
});

/* Form validation */
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let validationOK = checkFormInputs();
  if (validationOK) {
    clearInterval(sessionExpiration);
    setTimeout(function () {
      document.querySelector('.form-box-container').classList.remove('unhide-container');
      document.querySelector('.success-message').classList.add('unhide-container');
      document.body.style.pointerEvents = 'none';
    }, 1000 * 1)
    setTimeout(function () {
      document.querySelector('.success-message').classList.remove('unhide-container');
      document.body.style.height = '';
      document.body.style.overflowY = 'auto';
      document.body.style.pointerEvents = 'auto';
    }, 1000 * 10);
  };
});

/* Functions */
// Toggles the search bar in and out
function toggleBar() {
  var searchBar = document.querySelector(".input-search");
  if (searchBar.style.visibility == "visible") {
    searchBar.style.visibility = "hidden";
    searchBar.style.opacity = "0";
    searchBar.style.transition = "visibility 0s linear 1000ms, opacity 1000ms";
    document.querySelector('.results-empty').style.display = "none";
    clearResults();
  } else {
    searchBar.style.visibility = "visible";
    searchBar.style.opacity = "1";
    searchBar.style.transition = "visibility 0s linear 0s, opacity 1000ms";
    document.querySelector('.results-empty').style.display = "block";
  }
  if (document.querySelector('.carousel').style.display == "none") {
    document.querySelector('.carousel').style.display = "block";
    document.querySelector('.results').style.display = "none";
  } else {
    document.querySelector('.carousel').style.display = "none";
    document.querySelector('.results').style.display = "block";
  }
  searchBar.value = "";
};

// Sets the proper window display, searches for results in the database and shows them
function processInput() {
  let collectedString = myInput.value.trim();
  if ((collectedString == "") || (collectedString.length == 1)) {
    clearResults();
    if (document.querySelector(".input-search").style.visibility == "visible") {
      document.querySelector('.results-empty').style.display = "block";
      document.querySelector('.results-no-matches').style.display = "none";
    }
  }
  if (collectedString.length > 1) {
    document.querySelector('.results-empty').style.display = "none";
    clearResults();
    let mySearch = [];
    mySearch = searchMovie(myInput.value);
    if (mySearch.length == 0) {
      document.querySelector('.results-no-matches').style.display = "block";
    } else {
      document.querySelector('.results-no-matches').style.display = "none";
      mySearch.forEach(function (element) {
        insertMiniature(element);
      });
    };
  };
};

// Clear all elements in the results screen
function clearResults() {
  const myBox = document.querySelector('#results-box');
  while (myBox.lastChild && myBox.lastChild.className === "item") {
    myBox.removeChild(myBox.lastChild);
  }
};

// Searches in the movie database for coincidences
function searchMovie(string) {
  // Array to push the results in
  let results = [];
  /* First we check the release year,
  then we convert to string in case the movie is named with a number */
  if (typeof (parseInt(string, 10) == "number")) {
    for (let movie of movies) {
      if (movie.year === parseInt(string, 10)) {
        results.push(movie);
      }
    }
    string = string.toString();
  }
  // Clean the string from special characters, blank spaces and upper case
  if (typeof (string) == "string") {
    string = string.trim();
    string = string.toLowerCase();
    string = removeAccents(string);
  }
  // Iterate through each movie
  for (let movie of movies) {
    // Search for coincidences in the title
    let title = removeAccents(movie.title);
    title = title.toLowerCase();
    if (title.search(string) !== -1 && !results.includes(movie)) {
      results.push(movie);
      continue;
    }
    // Search for coincidences in the actors
    for (let i = 0; i < movie.actors.length; i++) {
      let actor = movie.actors[i];
      actor = removeAccents(actor);
      actor = actor.toLowerCase();
      if (actor.search(string) !== -1 && !results.includes(movie)) {
        results.push(movie);
        continue;
      }
    }
    // Search for coincidences in the directors
    for (i = 0; i < movie.directors.length; i++) {
      let director = movie.directors[i];
      director = removeAccents(director);
      director = director.toLowerCase();
      if (director.search(string) !== -1 && !results.includes(movie)) {
        results.push(movie);
        continue;
      }
    }
    // Search for coincidences in the genre
    for (i = 0; i < movie.genre.length; i++) {
      let genre = movie.genre[i];
      genre = removeAccents(genre);
      genre = genre.toLowerCase();
      if (genre.search(string) !== -1 && !results.includes(movie)) {
        results.push(movie);
        continue;
      }
    }
  }
  return results;
};

// Append the miniature passed as an argument in the results screen box
function insertMiniature(movieObject) {
  let myDiv = document.createElement('div');
  myDiv.className = "item";
  let myImg = document.createElement('img');
  myImg.src = movieObject.src;
  let myParagraph = document.createElement('p');
  myParagraph.textContent = movieObject.title;
  myDiv.appendChild(myImg);
  myDiv.appendChild(myParagraph);
  document.getElementById('results-box').appendChild(myDiv);
};

// Show movie details
function displayMovieInfo(str) {
  // Store the clicked movie in an object (Global variable to re-use later on in the form)
  myMovie = {};
  for (let movie of movies) {
    if (movie.src.includes(str)) {
      myMovie = movie;
      break;
    };
  };
  // Replace content for the title
  document.getElementById('title').innerHTML = "<b>Title: </b>" + myMovie.title;
  // Replace content for the image source
  document.getElementById('movie-image').src = myMovie.src;
  // Replace content for the year
  document.getElementById('year').innerHTML = "<b>Year: </b>" + myMovie.year;
  // Replace content for the synopsis
  document.getElementById('synopsis').innerHTML = "<b>Synopsis: </b>" + myMovie.synopsis;
  // Replace content for the directors
  let strDirectors = "";
  if (myMovie.directors.length > 1) {
    for (let i = 0; i < myMovie.directors.length - 1; i++) {
      strDirectors += myMovie.directors[i] + ", "
    };
  }
  strDirectors += myMovie.directors[myMovie.directors.length - 1] + ".";
  document.getElementById('directors').innerHTML = "<b>Director/s: </b>" + strDirectors;
  // Replace content for the actors
  let strActors = "";
  if (myMovie.actors.length > 1) {
    for (let i = 0; i < myMovie.actors.length - 1; i++) {
      strActors += myMovie.actors[i] + ", "
    };
  }
  strActors += myMovie.actors[myMovie.actors.length - 1] + ".";
  document.getElementById('actors').innerHTML = "<b>Actors: </b>" + strActors;
  // Replace content for the genre
  let strGenre = "";
  if (myMovie.genre.length > 1) {
    for (let i = 0; i < myMovie.genre.length - 1; i++) {
      strGenre += myMovie.genre[i] + ", "
    };
  }
  strGenre += myMovie.genre[myMovie.genre.length - 1] + ".";
  document.getElementById('genre').innerHTML = "<b>Genre/s: </b>" + strGenre;
  // Unhide the summary window
  document.querySelector('.info-movie-container').classList.add('unhide-container');
  document.body.style.height = '100vh';
  document.body.style.overflowY = 'hidden';
}

// Check all inputs in the form
function checkFormInputs() {
  let allInputsOK = true;
  // Get DOM elements
  const name = document.getElementById('name');
  const birthdate = document.getElementById('birthdate');
  const email = document.getElementById('email');
  const ccNumber = document.getElementById('cc-number');
  const ccExp = document.getElementById('cc-exp');
  const ccCvc = document.getElementById('cc-cvc');
  // Get values from the inputs
  const nameValue = name.value.trim();
  const birthdateValue = birthdate.value.trim();
  const emailValue = email.value.trim();
  const ccNumberValue = ccNumber.value.trim();
  const ccExpValue = ccExp.value.trim();
  const ccCvcValue = ccCvc.value.trim();
  // Check name field
  if (nameValue === '') {
    setErrorFor(name, 'Full name cannot be blank');
    allInputsOK = false;
  } else if (!isName(nameValue)) {
    setErrorFor(name, 'Between 5 and 35 non-special characters');
    allInputsOK = false;
  } else {
    setSuccessFor(name);
  }
  // Check birthdate field
  if (birthdateValue === '') {
    setErrorFor(birthdate, 'Birthdate cannot be blank');
    allInputsOK = false;
  } else {
    setSuccessFor(birthdate);
  }
  // Check email field
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
    allInputsOK = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
    allInputsOK = false;
  } else {
    setSuccessFor(email);
  }
  // Check credit card number field
  if (ccNumberValue === '') {
    setErrorFor(ccNumber, 'Credit card number cannot be blank');
    allInputsOK = false;
  } else if (!isCreditCardNumber(ccNumberValue)) {
    setErrorFor(ccNumber, 'Credit card number is not valid');
    allInputsOK = false;
  } else {
    setSuccessFor(ccNumber);
  }
  // Check credit card expiration date field
  if (ccExpValue === '') {
    setErrorFor(ccExp, 'Expiration date cannot be blank');
    allInputsOK = false;
  } else if (!isExpDate(ccExpValue)) {
    setErrorFor(ccExp, 'Expiration date is not valid');
    allInputsOK = false;
  } else {
    setSuccessFor(ccExp);
  }
  // Check credit card CVC/CVV number
  if (ccCvcValue === '') {
    setErrorFor(ccCvc, 'Verification number cannot be blank');
    allInputsOK = false;
  } else if (!isCvcNumber(ccCvcValue)) {
    setErrorFor(ccCvc, 'Verification number is not valid');
    allInputsOK = false;
  } else {
    setSuccessFor(ccCvc);
  }
  return allInputsOK;
}

// Set error message in every form input field
function setErrorFor(input, message) {
  const formField = input.parentElement; // .form-field
  const small = formField.querySelector('small');
  // add error message inside small
  small.innerText = message;
  // add error class
  formField.className = 'form-field error';
}

// Set sucess Class in every form input field
function setSuccessFor(input) {
  const formField = input.parentElement;
  formField.className = 'form-field success';
}

// Reset form inputs to zero
function cleanFormInputs() {
  // Get DOM elements
  const name = document.getElementById('name');
  const birthdate = document.getElementById('birthdate');
  const email = document.getElementById('email');
  const ccNumber = document.getElementById('cc-number');
  const ccExp = document.getElementById('cc-exp');
  const ccCvc = document.getElementById('cc-cvc');
  // Get values from the inputs
  name.value = '';
  birthdate.value = '';
  email.value = '';
  ccNumber.value = '';
  ccExp.value = '';
  ccCvc.value = '';
  // Remove error or success classes
  name.parentElement.className = 'form-field';
  birthdate.parentElement.className = 'form-field';
  email.parentElement.className = 'form-field';
  ccNumber.parentElement.className = 'form-field';
  ccExp.parentElement.className = 'form-field';
  ccCvc.parentElement.className = 'form-field';
}

// Reg-ex for name
function isName(name) {
  return /^[a-zA-Z \-\'\u00C0-\u00FF]{5,35}$/.test(name);
}

// Reg-ex for the email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Reg-ex for credit card number
function isCreditCardNumber(ccNumber) {
  return /^([0-9]{4})([-]{1})([0-9]{4})([-]{1})([0-9]{4})([-]{1})([0-9]{4})$/.test(ccNumber);
}

// Reg-ex for expiration date
function isExpDate(expDate) {
  return /^(0[1-9]|1[012])[/][2][0][2-3]{1}[0-9]{1}$/.test(expDate);
}

// Reg-ex for CVC number
function isCvcNumber(ccCvc) {
  return /^[0-9]{3,4}$/.test(ccCvc);
}

// Auxiliar function to remove special characters in a string
const removeAccents = function (str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Auxiliar function to switch the date format received from input type "date"
function convertDateFormat(string) {
  var info = string.split('-').reverse().join('/');
  return info;
}