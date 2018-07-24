//to read and set any environment variables with the dotenv package:
require("dotenv").config();

//import API and Secret keys
var keys = require("./keys.js");
var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotifyKey = new Spotify(keys.spotify);
var twitterKey = new Twitter(keys.twitter);


var commandTask = process.argv[2];
var searchRequest = process.argv.slice[3];


switch (commandTask) {
    case "movie-this":
        movieFunc();
        break;

    case "my-tweets":
        twitterFunc();
        break;

    case "spotify-this-song":
        spotifyFunc();
        break;

    case "do-what-it-says":
        whatItSaysFunc();
        break;
}

//OMDB Request task
function movieFunc() {
    var request = require("request");

    var movieTitle = searchRequest.join("+");

    var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (err, response, body) {
        if (!err && response.statusCode === 200) {

            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Released);
            console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country where the movie was produced: " + JSON.parse(body).Country);
            console.log("Language of the Movie: " + JSON.parse(body).Language);
            console.log("Plot of the Movie: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);


            fs.appendFile("log.txt", body, function(err) {
                if (err) throw err;
                console.log("Log Completed!");
            });
        }
        else {
            console.log(err);
        }


    })

};

//Twitter API request Task
function twitterFunc() {
    var params = { screen_name: 'KingCongWin' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log("Tweet date: " + tweets[i].created_at + "\n" + tweets[i].text);                
            }            
        } 
        else {
            console.log(error);            
        }
    });
};

//Spotify API Request Task
function spotifyFunc(){
    var musicSearch = searchRequest.join(" ");

    spotifyKey.search({ type: 'track', query: musicSearch }, function(error, data) {
        if (!error) {
            result = data.tracks.items[0];
            var artists = []
            for (var i = 0; i < res.artists.length; i ++) {
                artists.push(res.artists[i].name)
            }
            console.log("Artist(s): " + artists.join(" ") + "\n");
            console.log("Song Title: " + result.name + "\n");
            console.log("Preview: " + result.preview_url + "\n");
            console.log("Album: " + result.album.name + "\n");
            
        } 
        else {
            console.log(error);
        }
    });

};

//Appending Task
function whatItSaysFunc(){
    var text = searchRequest.join(" ");

    fs.appendFile("random.txt", text + "\n", function(err){
        if (err){
            console.log(err);
        }
        else{
            console.log("Text Added!");
        }
    })
};