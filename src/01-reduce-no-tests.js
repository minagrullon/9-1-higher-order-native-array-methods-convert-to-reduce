const exampleSongData = require('../data/songs');
const exampleVoteData = require('../data/votes');

// THERE ARE NO TESTS FOR THESE FILE EXERCISES
// UNCOMMENT DESIGNATED LINES TO TEST

/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to songs data or `exampleVotes` to gain access to the votes data.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/

// THERE ARE NO TESTS FOR THESE FILE EXERCISES
// TO TEST IN TERMINAL:
// 1. Uncomment appropriate console.log line
// 2. In terminal type `node src/01`
// 3. Push `tab`
// 4. Push `ENTER`

/***********************************************************************/

/**
 * allSongsRuntimeSum()
 * Returns the sum of all of the song runtimes
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Number} Number that represents the sum of all the songs
 * You must use .reduce
 *
 * EXAMPLE
 * allSongsRuntimeSum(exampleSongData)
 *
 * > 1680
 */

function allSongsRuntimeSum(exampleSongData) {
  const runTime = exampleSongData.reduce((runSum, obj) => runSum + obj.runtimeInSeconds, 0)
  return runTime
}

// UNCOMMENT THE CONSOLE.LOG LINE BELOW TO TEST
// run `node src/01-reduce-no-tests.js`
// look in terminal to see if you match the example
// when you are done, comment line again
// console.log(allSongsRuntimeSum(exampleSongData));

/***********************************************************************/

/**
 * getMaxRuntime()
 * Returns the object with the maximum runtimeInSeconds
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} returns the Object with the maximum runtimeInSeconds
 * You must use .reduce
 *
 * EXAMPLE
 * getMaxRuntime(exampleSongData)
 *
 * >  {
    title: 'Regular Guy',
    album: 'Regular Guy',
    artist: 'Peanut',
    runtimeInSeconds: 215
  }
 */

function getMaxRuntime(exampleSongData) {
  const biggest = exampleSongData.reduce((accumulator, song) => {
    
    if(song.runtimeInSeconds < accumulator.runtimeInSeconds){
      return accumulator
    }
    return song
  }, 0)
  return biggest
}

// UNCOMMENT  THE CONSOLE.LOG LINE BELOW TO TEST
// run `node src/01-reduce-no-tests.js`
// look in terminal to see if you match the example
// when you are done, comment line again

// console.log(getMaxRuntime(exampleSongData));

/***********************************************************************/

/**
 * countVotes()
 * Counts the votes for each vote value in the object and places the vote value and the count in a new object
 * @param {Object[]} votes - An array of votes. See the votes data for more.
 * @returns {Object} Returns an object with the vote value as key and the number of votes for that vote value as the value.
 * You must use .reduce
 *
 * EXAMPLE
 * countVotes(exampleVotes)
 *
 * > {
  'Pink Elephants': 3,
  'Kyona': 1,
  'In the Middle of Nowhere': 1,
  undecided: 2,
  'Samui Sunrise': 2
}
 */

function countVotes(exampleVoteData) {

const votesCount = exampleVoteData.reduce((countedV, vote) =>{
  if(!countedV[vote.vote]){
    countedV[vote.vote] = 1
  } else { countedV[vote.vote] += 1}
return countedV
}, {})
return votesCount
}

// UNCOMMENT THE CONSOLE.LOG LINE BELOW TO TEST
// run `node src/01-reduce-no-tests.js`
// look in terminal to see if you match the example
// when you are done, comment line again

// console.log(countVotes(exampleVoteData));
