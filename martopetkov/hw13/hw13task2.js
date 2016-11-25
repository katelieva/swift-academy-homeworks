  var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
  ];


 // Start Task 2.1
function findByAge(list, age) {
    // returns the name of the artist that has the given age
    
    
    var result = (artists.born - artists.died);
   return result; 
  }

  findByAge(artists, 52); // => "Tracy Chapman"
  findByAge(artists, 34); // => -1
  
  // End Task 2.1
  
  // Start Task 2.2
  function avarageAge(list, age) {
    // returns the average age of all artists
  }

  avarageAge(artists); // => 50
  // End Task 2.2
  
  
  // Start Task 2.3

function stillAlive(artist) {
    // returns true if the given artist is still alive and false otherwise
    
   if (artists.born[i] > 1960) {
    console.log(artists.name + " has passed away");
  }
  else {
    console.log(artists.name + " is still alive");
  }
    
  }

  stillAlive(artists[0]); // => false
  stillAlive(artists[1]); // => true
// End Task 2.3

