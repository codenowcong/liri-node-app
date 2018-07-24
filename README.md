# liri-node-app
NodeJS Homework# 10

**LIRI Node Project**:
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Objective
To create node commands to that return specific information that was requested by the user in a legible format.

### Resources and NPM Install
* Node.js
* Spotify Web API // 
* OMDb API
* Twitter API

### Node Commands:
* `my-tweets`
* `spotify-this-song` + `*title of song*`
* `movie-this`
* `do-what-it-says`

### **Instruction:**
All task will take place in the terminal/bash. Please be sure to be in the direct directory of the file.

* Node command: node liri.js **command** ex: `node liri.js my-tweets`; `node liri.js spotify-this-song beat it`; etc):

* **my-tweets**:
This will display 20 tweets from the username assigned.

* s**potify-this-song**:
This will display the parameters below:
     ```
     * Artist(s)     
     * The song's name     
     * A preview link of the song from Spotify     
     * The album that the song is from

* **movie-this**:
This will output the following information to your terminal/bash window:
   ```
     * Title of the movie.
     * Year the movie came out.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Country where the movie was produced.
     * Language of the movie.
     * Plot of the movie.
     * Actors in the movie.

* **do-what-it-says**:
Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
